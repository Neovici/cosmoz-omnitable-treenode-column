import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-treenode';
import '@polymer/paper-spinner/paper-spinner-lite';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import {
	html, nothing
} from 'lit-html';

import { columnMixin } from '@neovici/cosmoz-omnitable/cosmoz-omnitable-column-mixin';

/**
 * Column that displays a tree node, for `cosmoz-omnitable`.
 *
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 * @demo demo/index.html
 */
class CosmozOmnitableTreenodeColumn extends columnMixin(PolymerElement) {
	static get is() {
		return 'cosmoz-omnitable-treenode-column';
	}

	renderCell(column, { item }) {
		return html`
				<style>
					cosmoz-omnitable-item-expand-line cosmoz-treenode {
						white-space: normal;
					}
				</style>
				<cosmoz-treenode
					hide-from-root=${ column._hideFromRoot }
					show-max-nodes=${ column.showMaxNodes }
					no-wrap
					key-property=${ column.keyProperty }
					.keyValue=${ column.get(column.valuePath, item) }
					value-property=${ column.valueProperty }
					.ownerTree=${ column.ownerTree }
				></cosmoz-treenode>
	`;
	}

	renderEditCell() {
		return nothing;
	}

	renderHeader(column) {
		const spinner = column.loading
			? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete-ui
			class="external-values-[[ externalValues ]]"
			.label=${ column.title }
			.title=${ column._tooltip }
			.source=${ column._source }
			.textProperty=${ column._textProperty }
			.value=${ column._computeValue(column.filter, column._source) }
			.text=${ column.query }
			.onChange=${ column._onChange }
			.onFocus=${ column._onFocus }
			.onText=${ column._onText }
			.limit=${ column._limit }
		>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	/* eslint-disable-next-line max-lines-per-function */
	static get properties() {
		return {
			ownerTree: {
				type: Object
			},

			/**
			* Ask for a list of values
			*/
			bindValues: {
				type: Boolean,
				readOnly: true,
				value: true
			},

			filter: {
				type: String,
				value: null
			},

			locale: {
				type: String,
				value: null
			},

			showMaxNodes: {
				type: Number
			},

			/**
			* If displayed node share a common path from root, this property indicates wether this common
			* path should be replaced by an ellipsis.
			*/
			showCommonPath: {
				type: Boolean,
				value: false
			},

			/**
			* Name of the property used to lookup the displayed node in the tree
			*/
			keyProperty: {
				type: String
			},

			valueProperty: {
				type: String,
				value: 'name'
			},

			/**
			* The value of the `paper-autocomplete` input.
			*/
			query: {
				type: String,
				notify: true
			},

			_collator: {
				type: Object,
				computed: '_computeCollator(locale)'
			},

			_hideFromRoot: {
				type: Number,
				value: 0,
				computed: '_computeHideFromRoot(showCommonPath, values, ownerTree)'
			},

			_tooltip: {
				type: String,
				computed: '_computeTooltip(filter, ownerTree, keyProperty, valueProperty)'
			},

			_source: {
				type: Array,
				computed: '_computeSource(values, _collator, ownerTree, keyProperty, valueProperty)'
			},
			minWidth: {
				type: String,
				value: '85px'
			},

			editMinWidth: {
				type: String,
				value: '85px'
			},

			_textProperty: { value: 'text' }
		};
	}

	constructor() {
		super();
		this._onFocus = this._onFocus.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onText = this._onText.bind(this);
	}

	/**
	* Get a list of suggestions for the column header.
	* @param {array} values Suggestion values.
	* @param {object} collator Language sensitive string comparison object.
	* @param {object} ownerTree Owner tree to get texts from.
	* @param {string} keyProperty The key property
	* @param {string} valueProperty the value property
	* @returns {array} Suggestions remapped for the column header.
	*/
	_computeSource(values, collator, ownerTree = this.ownerTree, keyProperty = this.keyProperty, valueProperty = this.valueProperty) {
		if (!Array.isArray(values) || values.length === 0 || !ownerTree) {
			return [];
		}
		return values.map(value => ({
			value,
			text: ownerTree.getPathStringByProperty(value, keyProperty, valueProperty, ' / ')
		}))
			.sort((a, b) => collator.compare(a.text, b.text));
	}
	/**
	* Get a language sensitive string comparison object.
	* @param {string} locale Current locale.
	* @returns {object} Collator.
	*/
	_computeCollator(locale) {
		return new Intl.Collator(locale || undefined);
	}
	/**
	* Get a tooltip text for the column.
	* @param {string} filter Filter text.
	* @param {object} ownerTree Owner tree to get tooltip text from.
	* @param {string} keyProperty the property to search to find the node
	* @param {string} valueProperty the value for keyProperty to be the correct node
	* @returns {string} Tooltip text.
	*/
	_computeTooltip(filter, ownerTree, keyProperty, valueProperty) {
		const requiredValues = [filter, ownerTree, keyProperty, valueProperty];
		if (requiredValues.includes(null) || requiredValues.includes(undefined)) {
			return;
		}
		return ownerTree.getPathStringByProperty(filter, keyProperty, valueProperty, ' / ');
	}
	/**
	* Get a comparable value from the column.
	* @param {object} item Column data.
	* @param {string} valuePath Value path in column data.
	* @returns {void|string} Column data in a comparable format.
	*/
	getComparableValue(item, valuePath) {
		if (!item || !this.ownerTree) {
			return;
		}

		return this.ownerTree.getPathStringByProperty(this.get(valuePath, item), this.keyProperty, this.valueProperty, ' / ');
	}

	/**
	* Get a filter function for the column.
	* @returns {void|function} Filter function.
	*/
	getFilterFn() {
		if (!this.filter) {
			return;
		}
		return this._applySingleFilter.bind(this, this.filter);
	}
	/**
	* Get column represented as a string.
	* @param {object} item Column data.
	* @param {string} valuePath Value path in column data.
	* @returns {void|string} Column in string format.
	*/
	getString(item, valuePath) {
		return this.getComparableValue(item, valuePath || this.valuePath);
	}
	/**
	* Determine if a filter should be enabled or not.
	* @param {string} filter Filter text.
	* @param {object} item Column data.
	* @returns {boolean} Whether the filter should be enabled or not.
	*/
	_applySingleFilter(filter, item) {
		return filter === this.get(this.valuePath, item);
	}

	// HACK(pasleq): Cosmoz.Tree API needs to be fixed to avoid such code in components
	getPathByProperty(propertyName, propertyValue, ownerTree = this.ownerTree) {
		if (!ownerTree) {
			return [];
		}

		if (propertyName === 'pathLocator') {
			return ownerTree.getPathNodes(propertyValue);
		}

		const node = ownerTree.getNodeByProperty(propertyValue, propertyName);
		if (node && node.pathLocator) {
			return ownerTree.getPathNodes(node.pathLocator);
		}

		return [];
	}
	/**
	* Get column content as an XLSX value.
	* @param {object} item Column data.
	* @param {string} valuePath Value path in column data.
	* @returns {string} Column in XLSX value format.
	*/
	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.getString(item, valuePath);
	}
	/**
	* Get a number of nodes that should not be rendered starting from root.
	* @param {boolean} showCommonPath Show common node path or not.
	* @param {array} values Nodes.
	* @param {object} ownerTree Owner tree to get paths data from.
	* @returns {number} Node amount not to render.
	*/
	_computeHideFromRoot(showCommonPath, values, ownerTree) {
		if (showCommonPath || !values || !Array.isArray(values) || values.length === 0) {
			return 0;
		}

		const paths = values.map(value => this.getPathByProperty(this.keyProperty, value, ownerTree)),
			reducedPaths = paths.reduce((agg, part) => {
				if (agg == null || part != null && part.length < agg.length) {
					return part;
				}
				return agg;
			});

		if (!Array.isArray(reducedPaths)) {
			return 0;
		}

		return reducedPaths.filter((sPathPart, sppIndex, shortest) => {
			if (sppIndex + 1 === shortest.length) {
				// we need at least one node to show
				return false;
			}
			return paths.every(path => path != null && path[sppIndex] === sPathPart);
		})
			.length;
	}

	_serializeFilter(filter = this.filter) {
		return filter || null;
	}
	_deserializeFilter(obj) {
		return obj || null;
	}

	_computeValue(
		filter,
		source = []
	) {
		return source.find(({ value }) => filter === value);
	}
	_onChange(value) {
		this.filter = value?.slice(-1)?.[0]?.value || null;
	}

	_onFocus(focused) {
		this.headerFocused = focused;
	}

	_onText(text) {
		this.query = text;
	}
}

customElements.define(CosmozOmnitableTreenodeColumn.is, CosmozOmnitableTreenodeColumn);
