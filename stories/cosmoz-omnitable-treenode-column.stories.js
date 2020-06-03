import { html } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import '@neovici/cosmoz-omnitable';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../cosmoz-omnitable-treenode-column';

export default {
	title: 'cosmoz-omnitable-treenode-column',
	component: 'cosmoz-omnitable-treenode-column'
};

const basic = () => {
	const data = [
			{
				name: 'Sed a quam interdum',
				nodeId: '167d1485-7d4f-4c7d-86cd-a4fb00f31245'
			},
			{
				name: 'Euismod sapien non',
				nodeId: '3a7654f1-e3e6-49c7-b6a8-a4fb00f31245'
			},
			{
				name: 'rhoncus dolor',
				nodeId: '426d7dba-a4f0-4bd4-9b34-a4fb00f31248'
			},
			{
				name: 'Duis mollis leo ut nibh sagittis',
				nodeId: '1641faed-1043-450e-868d-a4fb00f3124f'
			},
			{
				name: 'a porta leo maximus',
				nodeId: '53f0b29d-6755-4099-b70c-a4fb00f3124e'
			},
			{
				name: 'Fusce tristique leo',
				nodeId: 'a0ae20d8-7074-4bfb-9864-a4fb00f3124d'
			},
			{
				name: 'a porttitor porttitor',
				nodeId: '81e3a3ef-abae-4781-aa4c-a4fb00f31252'
			},
			{
				name: 'Nam finibus leo euismod',
				nodeId: 'abbe92c9-d7f4-448e-a531-a4fb00f31249'
			},
			{
				name: 'Sed luctus leo sollicitudin',
				nodeId: '8d55d691-b8a8-4292-ad4a-a4fb00f3124e'
			},
			{
				name: 'Cras laoreet erat ut eros viverra egestas',
				nodeId: '6fd57f4f-43e9-4a4c-800c-a4fb00f31246'
			},
			{
				name: 'Etiam sit amet mauris semper',
				nodeId: '219b3399-7edd-42b7-ad92-a4fb00f31247'
			}
		],
		content = fetch('./node_modules/@neovici/cosmoz-tree/demo/tree.json')
			.then(r => r.json())
			.then(tree => html`
		<cosmoz-omnitable .data=${ data }>
			<cosmoz-omnitable-column name="name" title="Name" value-path="name" min-width="200px">
			</cosmoz-omnitable-column>
			<cosmoz-omnitable-treenode-column name="node" title="Node" flex="5" show-max-nodes="3"
				value-path="nodeId" key-property="id" .ownerTree=${ new DefaultTree(tree) } >
			</cosmoz-omnitable-treenode-column>
		</cosmoz-omnitable>
	`);

	return html`
		<style >
			cosmoz-omnitable {
				height: calc(100vh - 16px)
			}
		</style>
		${ until(content, html`<span>Loading...</span>`) }
	`;
};
export {
	basic
};
