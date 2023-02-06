import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { guard } from 'lit-html/directives/guard.js';

import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-treenode';
import '@polymer/paper-spinner/paper-spinner-lite';

import { columnMixin } from '@neovici/cosmoz-omnitable/cosmoz-omnitable-column-mixin';
import { get } from '@polymer/polymer/lib/utils/path';
import { makeCollator, computeTooltip, getCurrentFilter } from './utils';
import { valuesFrom } from '@neovici/cosmoz-omnitable/lib/utils-data';
import {
	prop, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

const getComparableValue = (
		{ valuePath, ownerTree, keyProperty, valueProperty },
		item
	) => {
		if (!item || !ownerTree) {
			return;
		}
		return ownerTree.getPathStringByProperty(
			get(item, valuePath),
			keyProperty,
			valueProperty,
			' / '
		);
	},
	getString = (column, item) => getComparableValue(column, item),
	applySingleFilter =
		({ valuePath }, filter) =>
		(item) =>
			filter === get(item, valuePath),
	applyMultiFilter = ({ valuePath, emptyValue, headerValueProperty }, filters) => item => {
		const val = prop(headerValueProperty),
			values = array(get(item, valuePath));
		return filters.some(filter =>
			values.length === 0 && val(filter) === emptyValue || values.some(value => value === val(filter))
		);
	};

/**
 * Column that displays a tree node, for `cosmoz-omnitable`.
 *
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 * @demo demo/index.html
 */
class CosmozOmnitableTreenodeColumn extends columnMixin(PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function */
	static get properties() {
		return {
			ownerTree: { type: Object, notify: true },
			locale: { type: String },
			/**
			 * Name of the property used to lookup the displayed node in the tree
			 */
			keyProperty: { type: String },
			valueProperty: { type: String, value: 'name' },
			headerValueProperty: { type: String, value: 'value' },
			headerTextProperty: { type: String, value: 'text' },
			minWidth: { type: String, value: '85px' },
			limit: { type: String },
		};
	}

	/**
	 * Get a comparable value from the column.
	 * @param {object} column Column configuration.
	 * @param {object} item Column data.
	 * @returns {void|string} Column data in a comparable format.
	 */
	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	getFilterFn(column, filter) {
		if (!filter) {
			return;
		}
		if (Array.isArray(filter) && filter.length > 0) {
			return applyMultiFilter(column, filter);
		}
		return applySingleFilter(column, filter);
	}

	/**
	 * Get column represented as a string.
	 * @param {object} column Column configuration.
	 * @param {object} item Item data.
	 * @returns {void|string} Item value in string format.
	 */
	getString(column, item) {
		return getString(column, item);
	}

	cellTitleFn(column, item) {
		return getString(column, item);
	}

	toXlsxValue(column, item) {
		return getString(column, item);
	}

	serializeFilter(column, filter) {
		return !filter || filter.length === 0 ? null : JSON.stringify(filter);
	}

	deserializeFilter(column, filter) {
		return filter == null ? null : JSON.parse(decodeURIComponent(filter));

	}

	renderCell(column, { item }) {
		return html`
			<style>
				cosmoz-omnitable-item-expand-line cosmoz-treenode {
					white-space: normal;
				}
			</style>
			<cosmoz-treenode
				hide-from-root="0"
				show-max-nodes="0"
				no-wrap
				key-property=${column.keyProperty}
				.keyValue=${get(item, column.valuePath)}
				value-property=${column.valueProperty}
				.ownerTree=${column.ownerTree}
			></cosmoz-treenode>
		`;
	}

	renderEditCell() {
		return nothing;
	}

	renderHeader(
		{ title, loading, limit, headerValueProperty, headerTextProperty },
		{ filter },
		setState,
		source
	) {
		const spinner = when(
			loading,
			() => html`<paper-spinner-lite
				style="width: 20px; height: 20px; flex: none"
				suffix
				slot="suffix"
				active
			></paper-spinner-lite>`
		);
		return html`<cosmoz-autocomplete
			.label=${title}
			.title=${computeTooltip(filter,title)}
			.textProperty=${headerTextProperty}
			.valueProperty=${headerValueProperty}
			.value=${guard([filter, source], () => filter)}
			.limit=${ limit }
			.onChange=${(value) => {
				setState((state) => ({
					...state,
					filter: getCurrentFilter(value),
				}));
			}}
			.source=${source}
			.onFocus=${(headerFocused) =>
				setState((state) => ({ ...state, headerFocused }))}
			.onText=${(query) => setState((state) => ({ ...state, query }))}
			>${spinner}</cosmoz-autocomplete
		>`;
	}

	/**
	 * Get a list of suggestions for the column header.
	 *
	 * @param   {object}  column                Column configuration.
	 * @param   {object}  column.ownerTree      Owner tree to get texts from.
	 * @param   {string}  column.keyProperty    The key property.
	 * @param   {string}  column.valueProperty  The value property.
	 * @param   {string}  column.locale         The locale.
	 * @param   {string}  column.valuePath      The path to the value.
	 * @param   {array}  data           Omitable data.
	 *
	 * @return  {array}                 The sorted values.
	 */
	computeSource(
		{
			ownerTree,
			keyProperty,
			valueProperty,
			locale = null,
			valuePath,
			externalValues,
			values,
		},
		data
	) {
		const collator = makeCollator(locale),
			values_ = values != null && !Array.isArray(values) ? Object.keys(values) : values,
			values__ = externalValues ? values_ : valuesFrom(data, valuePath);

		return values__
		?.map((value) => ({
			value,
			text: ownerTree?.getPathStringByProperty(
				value,
				keyProperty,
				valueProperty,
				' / '
			),
		}))
		.sort((a, b) => collator.compare(a.text, b.text));
	}

}

customElements.define(
	'cosmoz-omnitable-treenode-column',
	CosmozOmnitableTreenodeColumn
);
