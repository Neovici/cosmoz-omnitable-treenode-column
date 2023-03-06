import { memoooize } from '@neovici/cosmoz-utils/memoize';

const /**
	 * Get a language sensitive string comparison object.
	 * @param {string} locale Current locale.
	 * @returns {object} Collator.
	 */
	_makeCollator = (locale) => new Intl.Collator(locale || undefined),
	makeCollator = memoooize(_makeCollator),
	/**
	 * Get a tooltip text for the column.
	 * @param {array} filters Filter text.
	 * @param {string} title the title
	 * @returns {string} Tooltip text.
	 */
	computeTooltip = (filters = [], title) => {
		if (!Array.isArray(filters) || filters.length < 1) {
			return title;
		}
		return filters.map((item) => item?.text).join(',');
	},
	/**
	 * Get a filter object for the url.
	 * @param {array} value Filter text.
	 * @returns {object} Filter object.
	 */
	getCurrentFilter = (value) => {
		if (value == null || (Array.isArray(value) && value.length === 0)) {
			return null;
		}
		return value;
	};

export { makeCollator, computeTooltip, getCurrentFilter };
