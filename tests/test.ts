import { expect, test } from '@playwright/test';

const testRoute = '/tests';

test('nodes exist and are draggable', async ({ page }) => {
	await page.goto(testRoute);

	const node1 = page.locator('#N-node1');
	const node2 = page.locator('#N-node2');

	const sourceAnchor = page.locator('[id="A-2/N-node2"]');
	const targetAnchor = page.locator('[id="A-1/N-node1"]');

	await expect(node1).toBeVisible();
	await expect(node1).toHaveClass(/^svelvet-node/);

	// Check node dimensions and position
	await expect(node1).toHaveCSS('left', '0px');
	await expect(node1).toHaveCSS('top', '0px');
	await expect(node1).toHaveCSS('width', '200px');
	await expect(node1).toHaveCSS('height', '100px');

	// Check node dimensions and position
	await expect(node2).toHaveCSS('left', '300px');
	await expect(node2).toHaveCSS('top', '300px');
	await expect(node2).toHaveCSS('width', '400px');
	await expect(node2).toHaveCSS('height', '100px');

	// Check that the node has the correct text
	await expect(node1).toHaveText('test');

	await expect(sourceAnchor).toBeVisible();
	await expect(targetAnchor).toBeVisible();

	await node1.dragTo(node2);

	await expect(node1).toHaveCSS('left', '400px');
	await expect(node1).toHaveCSS('top', '300px');
});

test('graph is pannable', async ({ page }) => {
	await page.goto(testRoute);
	const graph = page.locator('#G-1');
	const wrapper = graph.locator('.svelvet-graph-wrapper');

	await expect(wrapper).toHaveAttribute('style', 'transform: translate(0px, 0px) scale(1);');

	// Get the bounding box of the wrapper
	const wrapperBox = await wrapper.boundingBox();
	if (!wrapperBox) throw new Error('Wrapper not found');
	// Calculate the starting position for dragging
	const startX = wrapperBox.x + wrapperBox.width / 2;
	const startY = wrapperBox.y + wrapperBox.height / 2;

	// Drag the wrapper by 100px in both x and y directions
	await page.mouse.move(startX, startY);
	await page.mouse.down();
	await page.mouse.move(startX + 100, startY + 100);
	await page.mouse.up();

	await expect(wrapper).toHaveAttribute('style', 'transform: translate(100px, 100px) scale(1);');
});

test('anchors can be connected', async ({ page }) => {
	await page.goto(testRoute);
	const sourceAnchor = page.locator('[id="A-2/N-node1"]');
	const targetAnchor = page.locator('[id="A-1/N-node2"]');

	await sourceAnchor.dragTo(targetAnchor);

	const newEdge = page.locator('[id="A-1/N-node2+A-2/N-node1;"]');

	await expect(newEdge).toHaveAttribute('d', 'M 200, 50 C 250, 50 250, 350 300, 350');
	await expect(newEdge).toHaveAttribute('style', 'stroke: white; stroke-width: 2px;');
});

test('anchors can be disconnected', async ({ page }) => {
	await page.goto(testRoute);
	const targetAnchor = page.locator('[id="A-1/N-node2"]');
	const node = await page.locator('#N-3');
	await targetAnchor.dragTo(node);

	const newEdge = page.locator('[id="A-1/N-node2+A-2/N-node1;"]');

	const elementCount = await newEdge.count();
	expect(elementCount).toBe(0);
});

test('outputs cannot be connected to outputs', async ({ page }) => {
	await page.goto(testRoute);
	const sourceAnchor = page.locator('[id="A-2/N-node1"]');
	const targetAnchor = page.locator('[id="A-2/N-node2"]');

	await sourceAnchor.dragTo(targetAnchor);

	const newEdge = page.locator('[id="A-2/N-node2+A-2/N-node1;"]');

	await expect(newEdge.count()).resolves.toBe(0);
});

test('the minimap is rendered with the correct number of nodes', async ({ page }) => {
	await page.goto(testRoute);
	const minimap = await page.locator('.minimap-wrapper');
	await expect(minimap).toBeVisible();
	const minimapNodes = await page.$$('.minimap-node');

	expect(minimapNodes.length).toBe(3);
});

test('the canvas is the correct size', async ({ page }) => {
	await page.goto(testRoute);

	const canvas = await page.waitForSelector('#G-1');
	if (!canvas) throw new Error('Canvas not found');

	const canvasBox = await canvas.boundingBox();

	if (!canvasBox) throw new Error('Canvas bounding box not found');

	expect(canvasBox.width).toBe(800);
	expect(canvasBox.height).toBe(500);
});

test('default node is created with correct id and inputs', async ({ page }) => {
	await page.goto(testRoute);
	const wrapper = page.locator('.svelvet-graph-wrapper');
	if (!wrapper) throw new Error('Wrapper not found');
	const node = await page.waitForSelector('#N-3');
	if (!node) throw new Error('Node not found');

	const inputs = await node.$('.input-anchors');
	if (!inputs) throw new Error('Inputs not found');

	const anchors = await inputs.$$('.anchor-wrapper');
	if (!anchors) throw new Error('Anchors not found');

	const anchor1 = page.locator('[id="A-1/N-3"]');
	const anchor2 = page.locator('[id="A-2/N-3"]');
	const anchor3 = page.locator('[id="A-3/N-3"]');

	await expect(anchor1).toBeVisible();
	await expect(anchor2).toBeVisible();
	await expect(anchor3).toBeVisible();

	await expect(anchors.length).toBe(3);
});

test('graph is zoomable by scrolling', async ({ page }) => {
	await page.goto(testRoute);

	const graphWrapper = page.locator('.svelvet-graph-wrapper');

	await expect(graphWrapper).toHaveAttribute('style', 'transform: translate(0px, 0px) scale(1);');

	// Get the bounding box of the wrapper
	const wrapperBox = await graphWrapper.boundingBox();
	if (!wrapperBox) throw new Error('Wrapper not found');
	// Calculate the starting position for dragging
	const startX = wrapperBox.x + wrapperBox.width / 2;
	const startY = wrapperBox.y + wrapperBox.height / 2;

	// Dispatch a wheel event on the graph wrapper to zoom in
	await page.mouse.move(startX, startY);
	await page.mouse.wheel(0, -100);

	// Check if the scale value has increased
	await expect(graphWrapper).toHaveAttribute(
		'style',
		/^transform: translate\(0px, 0px\) scale\((\d+\.\d+)\);$/
	);
});

test('graph is zoomable via controls', async ({ page }) => {
	await page.goto(testRoute);

	const graphWrapper = page.locator('.svelvet-graph-wrapper');

	await expect(graphWrapper).toHaveAttribute('style', 'transform: translate(0px, 0px) scale(1);');

	const controls = page.locator('.graph-controls');
	if (!controls) throw new Error('Controls not found');
	const zoomIn = await page.waitForSelector('.zoom-in');

	if (!zoomIn) throw new Error('Zoom in not found');
	await zoomIn.click();

	// Check if the scale value has increased
	await expect(graphWrapper).toHaveAttribute(
		'style',
		/^transform: translate\(0px, 0px\) scale\((\d+\.\d+)\);$/
	);
});

test('shift-click and drag selects nodes', async ({ page }) => {
	await page.goto(testRoute);

	// Locate the nodes you want to test
	const testNode = page.locator('#N-node2');
	const selectionWrapper = testNode.locator('.default-node');

	const wrapperBox = await testNode.boundingBox();

	if (!wrapperBox) throw new Error('Wrapper not found');

	const startX = wrapperBox.x - 20;
	const startY = wrapperBox.y - 20;

	const endX = wrapperBox.x + wrapperBox.width + 20;
	const endY = wrapperBox.y + wrapperBox.height + 20;

	// Perform a shift-click and drag on the first node to the second node
	await page.mouse.move(startX, startY);
	await page.mouse.down();
	await page.mouse.up();
	await page.keyboard.down('Shift');
	await page.mouse.down();
	await page.mouse.move(endX, endY);
	await page.mouse.up();

	// Check if the "selected" class is added to both nodes
	await expect(selectionWrapper).toHaveClass(/selected/);
});

test('selecting one node deselects others', async ({ page }) => {
	await page.goto(testRoute);

	const node1 = page.locator('#N-node1');
	const node2 = page.locator('#N-node2');

	const node1Selection = node1.locator('.default-node');
	const node2Selection = node2.locator('.default-node');

	await node1.click();

	await expect(node1Selection).toHaveClass(/selected/);

	await node2.click();

	await expect(node1Selection).not.toHaveClass(/selected/);
	await expect(node2Selection).toHaveClass(/selected/);
});

test('node zIndexes are incremented correctly', async ({ page }) => {
	await page.goto(testRoute);

	const node1 = page.locator('#N-node1');
	const node2 = page.locator('#N-node2');

	await node1.click();

	await expect(node1).toHaveAttribute(
		'style',
		'top: 0px; left: 0px; width: 200px; height: 100px; z-index: 3; background-color: rgb(51, 51, 51); border-radius: 10px; color: rgb(255, 255, 255); --border-color:#111; --border-width:1.5px; --selection-color:#DDD; transform: rotate(0deg);'
	);

	await node2.click();

	await expect(node2).toHaveAttribute(
		'style',
		'top: 300px; left: 300px; width: 400px; height: 100px; z-index: 4; background-color: rgb(51, 51, 51); border-radius: 10px; color: rgb(255, 255, 255); --border-color:#111; --border-width:1.5px; --selection-color:#DDD; transform: rotate(0deg);'
	);
});

test('TD prop places inputs on the top', async ({ page }) => {
	await page.goto(testRoute);

	const node = page.locator('#N-3');
	const inputs = node.locator('.input-anchors');

	await expect(inputs).toHaveClass(/top/);
	await expect(inputs).toHaveCSS('top', '0px');
	await expect(inputs).toHaveCSS('display', 'flex');
	await expect(inputs).toHaveCSS('position', 'absolute');
});
