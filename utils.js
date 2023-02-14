import { memoize } from '@neovici/cosmoz-utils/memoize';

const
	/**
	* Get a language sensitive string comparison object.
	* @param {string} locale Current locale.
	* @returns {object} Collator.
	*/
	_makeCollator = locale => new Intl.Collator(locale || undefined),
	makeCollator = memoize(_makeCollator),

	/**
	* Get a tooltip text for the column.
	* @param {string} filter Filter text.
	* @param {object} ownerTree Owner tree to get tooltip text from.
	* @param {string} keyProperty the property to search to find the node
	* @param {string} valueProperty the value for keyProperty to be the correct node
	* @param {string} title the title
	* @returns {string} Tooltip text.
	*/
	computeTooltip = (filter, ownerTree, keyProperty, valueProperty, title) => {
		const requiredValues = [filter, ownerTree, keyProperty, valueProperty];
		if (requiredValues.includes(null) || requiredValues.includes(undefined)) {
			return title;
		}
		return ownerTree.getPathStringByProperty(filter, keyProperty, valueProperty, ' / ');
	};


export { makeCollator, computeTooltip };
