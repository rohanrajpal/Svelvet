<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import type {
		Graph as GraphType,
		GraphKey,
		NodeConfig,
		NodeStore,
		Theme,
		CSSColorString,
		EdgeStyle
	} from '$lib/types';
	import { populateStore } from '$lib/utils';
	import { createNode, createGraph } from '$lib/utils/';
	import { graphStore } from '$lib/stores';
	import Graph from '../Graph/Graph.svelte';
	import { reloadStore } from '$lib/utils/savers/reloadStore';
	import FlowChart from '$lib/components/FlowChart/FlowChart.svelte';
	import { writable } from 'svelte/store';
	import { THEMES } from '$lib/constants/themes';

	export let mermaid = '';
	export let theme: Theme = 'light';
	export let id: number | string = 0;
	export let nodes: Array<NodeConfig> = [];
	export let snapTo = 1;
	export let zoom = 1;
	export let TD = false;
	export let editable = false;
	export let locked = false;
	export let width = 0;
	export let height = 0;
	export let minimap = false;
	export let controls = false;
	export let toggle = false;
	export let fitView: boolean | 'resize' = false;
	export let selectionColor: CSSColorString = 'lightblue';
	export let edgeStyle: EdgeStyle = 'bezier';
	export let edge: ConstructorOfATypedSvelteComponent | null = null;
	export let disableSelection = false;
	export let mermaidConfig: Record<string, NodeConfig> = {};

	let graph: GraphType;
	let nodeStore: NodeStore;

	let direction: 'TD' | 'LR' = TD ? 'TD' : 'LR';

	setContext('snapTo', snapTo);

	setContext('edgeStyle', edgeStyle);
	setContext('graphEdge', edge);

	onMount(() => {
		const stateObject = localStorage.getItem('state');
		if (stateObject) {
			graph = reloadStore(stateObject);
			graphStore.add(graph, graph.id);
		} else {
			let graphKey: GraphKey = `G-${id || graphStore.count() + 1}`;

			graph = createGraph(graphKey, { zoom, theme, direction, editable, locked });

			if (nodes.length && !mermaid) {
				const nodeObjects = generateNodes(nodes);
				populateStore(nodeObjects, graph);
				nodeStore = graph.nodes;
			}

			// if (mermaid.length) {
			// 	const mermaidNodes = flowChartParser(mermaid);
			// 	const createdNodes = populateMermaidNodes(mermaidNodes, 'td');
			// 	populateStore(Object.values(createdNodes), graph);
			// 	nodeStore = graph.nodes;
			// }
			graphStore.add(graph, graphKey);
		}
	});

	let currentTheme = writable(THEMES[theme]);
	setContext('themeStore', currentTheme);

	$: if (graph) {
		$currentTheme = THEMES[theme];
	}

	function generateNodes(nodes: Array<NodeConfig>) {
		const nodeObjects = nodes.map((node) => createNode(node));
		return nodeObjects;
	}
	$: backgroundExists = $$slots.background;

	$: if (graph) graph.transforms.scale.set(zoom);
</script>

{#if graph}
	<Graph
		{width}
		{height}
		{toggle}
		{backgroundExists}
		{minimap}
		{graph}
		{fitView}
		{controls}
		{selectionColor}
		{disableSelection}
	>
		{#if mermaid.length}
			<FlowChart {mermaid} {mermaidConfig} />
		{/if}
		<slot />
		<slot name="minimap" slot="minimap" />
		<slot name="controls" slot="controls" />
		<slot name="background" slot="background" />
		<slot name="toggle" slot="toggle" />
	</Graph>
{:else}
	<div
		style:width={width ? width + 'px' : '100%'}
		style:height={height ? height + 'px' : '100%'}
		style:background-color={THEMES[theme].map}
	/>
{/if}
