import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-treenode';

import { polymerHauntedRender } from '@neovici/cosmoz-omnitable/lib/polymer-haunted-render-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { computeTooltip } from './utils';

/**
 * Column that displays a tree node, for `cosmoz-omnitable`.
 *
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 * @demo demo/index.html
 */
class CosmozOmnitableTreenodeColumnInput extends polymerHauntedRender(PolymerElement) {
	render() {
		return html`<cosmoz-autocomplete-ui
			.label=${ this.title }
			.title=${ computeTooltip(this.filter, this.ownerTree, this.keyProperty, this.valueProperty, this.title) }
			.source=${ this.source }
			.textProperty=${ 'text' }
			.value=${ this.source?.find(({ value }) => this.filter === value) }
			.text=${ this.query }
			.onChange=${ this._onChange }
			.onFocus=${ this._onFocus }
			.onText=${ this._onText }
			.limit=${ 1 }
		><slot name="suffix" slot="suffix"></slot></cosmoz-autocomplete-ui>`;
	}

	/* eslint-disable-next-line max-lines-per-function */
	static get properties() {
		return {
			ownerTree: { type: Object },
			filter: { type: String, value: null, notify: true },
			headerFocused: { type: Boolean, notify: true },
			/**
			* Name of the property used to lookup the displayed node in the tree
			*/
			keyProperty: { type: String },
			valueProperty: { type: String, value: 'name' },
			/**
			* The value of the `paper-autocomplete` input.
			*/
			query: { type: String, notify: true }
		};
	}

	constructor() {
		super();
		this._onFocus = this._onFocus.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onText = this._onText.bind(this);
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

customElements.define('cosmoz-omnitable-treenode-column-input', CosmozOmnitableTreenodeColumnInput);
