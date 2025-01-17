import { assert, html, fixture, nextFrame } from '@open-wc/testing';

import '@neovici/cosmoz-omnitable';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../cosmoz-omnitable-treenode-column';
import { columnSymbol } from '@neovici/cosmoz-omnitable/lib/use-dom-columns';

const data = [
	{
		name: 'Sed a quam interdum',
		nodeId: '167d1485-7d4f-4c7d-86cd-a4fb00f31245',
	},
	{
		name: 'Euismod sapien non',
		nodeId: '3a7654f1-e3e6-49c7-b6a8-a4fb00f31245',
	},
	{
		name: 'rhoncus dolor',
		nodeId: '426d7dba-a4f0-4bd4-9b34-a4fb00f31248',
	},
	{
		name: 'Duis mollis leo ut nibh sagittis',
		nodeId: '1641faed-1043-450e-868d-a4fb00f3124f',
	},
	{
		name: 'a porta leo maximus',
		nodeId: '53f0b29d-6755-4099-b70c-a4fb00f3124e',
	},
	{
		name: 'Fusce tristique leo',
		nodeId: 'a0ae20d8-7074-4bfb-9864-a4fb00f3124d',
	},
	{
		name: 'a porttitor porttitor',
		nodeId: '81e3a3ef-abae-4781-aa4c-a4fb00f31252',
	},
	{
		name: 'Nam finibus leo euismod',
		nodeId: 'abbe92c9-d7f4-448e-a531-a4fb00f31249',
	},
	{
		name: 'Sed luctus leo sollicitudin',
		nodeId: '8d55d691-b8a8-4292-ad4a-a4fb00f3124e',
	},
	{
		name: 'Cras laoreet erat ut eros viverra egestas',
		nodeId: '6fd57f4f-43e9-4a4c-800c-a4fb00f31246',
	},
	{
		name: 'Etiam sit amet mauris semper',
		nodeId: '219b3399-7edd-42b7-ad92-a4fb00f31247',
	},
];

suite('basic', () => {
	const onError = window.onerror;
	setup(() => {
		window.onerror = function (err) {
			if (err === 'ResizeObserver loop limit exceeded') {
				// eslint-disable-next-line no-console
				console.warn('Ignored: ResizeObserver loop limit exceeded');
				return false;
			}
			return onError(...arguments);
		};
	});
	teardown(() => {
		window.onerror = onError;
	});

	let tree, omnitable;

	const autocomplete = () =>
		omnitable.shadowRoot.querySelector('cosmoz-autocomplete');

	suiteSetup(async () => {
		tree = await fetch(
			'/node_modules/@neovici/cosmoz-tree/examples/tree.json',
		).then((r) => r.json());
	});
	setup(async () => {
		omnitable = await fixture(html`
			<cosmoz-omnitable style="height:300px; width:1200px;">
				<cosmoz-omnitable-column name="name" title="Name" value-path="name">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-treenode-column
					name="node"
					title="Node"
					flex="5"
					show-max-nodes="3"
					value-path="nodeId"
					key-property="id"
					.ownerTree=${new DefaultTree(tree)}
				>
				</cosmoz-omnitable-treenode-column>
			</cosmoz-omnitable>
		`);
		omnitable.data = data;
		await nextFrame();
		await nextFrame();
		await nextFrame();
		// omnitable renders the cells in the third animation frame
	});

	test('renders', () => {
		assert.isOk(omnitable.columns[1][columnSymbol]);
		const column = omnitable.columns[1][columnSymbol];
		assert.deepEqual(autocomplete().source, column.computeSource(column, data));
	});

	test('onChange', async () => {
		const column = omnitable.columns[1][columnSymbol];
		assert.isNull(column.serializeFilter(column, undefined));
		autocomplete().onChange([autocomplete().source[0]]);
		await nextFrame();
		assert.equal(
			omnitable.filters.node[0].value,
			'167d1485-7d4f-4c7d-86cd-a4fb00f31245',
		);
		assert.deepEqual(
			column.serializeFilter(column, omnitable.filters.node),
			'[{"value":"167d1485-7d4f-4c7d-86cd-a4fb00f31245","text":"Root / Company Pjqcakmiyx"}]',
		);
	});

	test('deserializeFilter', () => {
		const column = omnitable.columns[1][columnSymbol];
		assert.equal(column.deserializeFilter(column, 2), 2);
		assert.isNull(column.deserializeFilter(column));
	});

	test('getComparableValue', () => {
		const column = omnitable.columns[1][columnSymbol];
		assert.isUndefined(column.getComparableValue(column, undefined));
		assert.equal(
			column.getComparableValue(column, omnitable.data[0]),
			'Root / Company Pjqcakmiyx',
		);
	});
});
