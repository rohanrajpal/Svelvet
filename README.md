<div align="center">

![banner](https://i.imgur.com/pNIYDWO.png)

![MIT License](https://img.shields.io/badge/license-MIT-%23fb7182)
![NPM Downloads](https://img.shields.io/npm/dt/svelvet?color=%23fb7182&label=downloads)
![GitHub Stars](https://img.shields.io/github/stars/open-source-labs/svelvet?color=%23fb7182)
![GitHub Forks](https://img.shields.io/github/forks/open-source-labs/Svelvet?color=%23fb7182)
![NPM Version](https://img.shields.io/npm/v/svelvet?color=%23fb7182&label=version)

# Infinitely Customizable Node-Based User Interfaces with Svelvet!

Svelvet is a lightweight Svelte component library for building interactive node-based user interfaces and diagrams.

[⚡ Getting Started](https://svelvet.mintlify.app/getting-started/installation) | [📚 Documentation](https://svelvet.mintlify.app) | [⌨️ Blog](https://medium.com/@MauricioACastro/svelvet-4-0-the-power-of-html-is-now-inside-your-nodes-3d96823096e3) | [💬 Twitter](https://twitter.com/SvelvetOSLabs) | [💼 LinkedIn](https://www.linkedin.com/company/svelvet/)

</div>

## Version Updates

Shout out to our contributors! Here's what's new:

### Changelog

<details><summary>v7.0.0</summary>
<ul>
    <li>Changed primary API. Developers now pass Node and other exposed components directly as children to Svelvet</li>
    <li>Added the ability to specify Anchors as inputs, outputs or any, enabling connection logic and "directionality" of Edge curvature</li>
    <li>Added the ability to dynamically attach/reattach Edges</li>
     <li>All new Anchor component that developers can add anywhere within custom nodes. Can be wrapped around custom anchor elements or customized via props</li>
    <li>All new Edge component for developer customization</li>
    <li>All new Node component for developer customization</li>
    <li>Added ability to rotate nodes via the top left corner</li>
      <li>All new Resizer component used when composing custom nodes</li>
     <li>Improved reliability and DX around Edge click events</li>
    <li>Node connections can be specified at the Node or Anchor level. Improved flexibility of input options</li>
    <li>Improved consistency of touch events on mobile devices. Added touch support for controls component</li>
    <li>Nodes and Edges no longer require specified IDs. Defaults to incrementing value</li>
    <li>Added Controls component with zoom, reset, lock and unhide functionality plus the ability to pass custom control buttons as children</li>
     <li>Added the ability to specify an arbitrary number of Anchors on default nodes</li>
      <li>Added z-index stacking logic when interacting with Nodes</li>
    <li>Improved step path algorithm, which now connects Anchors regardless of their position. Exposed corner radius as prop</li>
    <li>Added keyboard navigation to canvas when focused</li>
    <li>Added selection box functionality via Shift + Click. Color can be controlled via the selectionColor prop on the Svelvet component.</li>
    <li>Added node grouping functionality via Shift + CMD + Click</li>
    <li>Added the ability to pass custom edges at the Graph, Node and Anchor level</li>
    <li>No longer required to pass width/height to Svelvet component. Will fill wrapping container by default</li>
    <li>Added the ability to specify canvas/node direction as top-down TD or left-right LR. Controls placement of input/output anchors on default nodes</li>
    <li>All new Minimap component that accepts props for placement, dimensions and styling the background and nodes (defaults to node color) and features dramatically improved tracking/visualization plus the ability to hide nodes</li>
    <li>All new Theme Toggle component that can toggle between a main and alt theme</li>
    <li>Enabled two way data binding for some parameters when creating default Nodes</li>
    <li>All new Background component allowing customization of grid size and color</li>
    <li>Exposed custom events on the Node component for on:nodeClicked, on:connection and on:disconnection that developers can listen for when implementing custom nodes</li>
    <li>Added theme prop to Svelvet component. Defaults to light. Accepts parameters like "dark", "purple", "parchment"</li>
    <li>Removed frontend website code from library repository</li>
    <li>Added E2E tests using Playwright</li>
    <li>Simplified bezier curve logic and added the ability to specify anchor "direction"</li>
    <li>Added ability to parse Mermaid strings into node graphs + edges</li>
    <li>Added a series of accessible input components (Slider, RadioGroup, TextField, ColorWheel) that can be composed in custom nodes and are linked with our data flow system</li>
    <li>Library now features 100% TypeScript coverage and fully exported types</li>
    <li>Removed D3-zoom dependency</li>
    <li>Removed redundant window and event listeners</li>
    <li>Added dynamic data flow/state management system that tracks Anchor connections</li>
    <li>Updated home page to include newest collaborators</li>
    <li>Temporarily removed dynamic anchor logic due to library re-write. May re-add</li>
    <li>Made progress on restoring graph state from local storage. Coming soon!</li>
</ul>
</details>

<details><summary>v6.0.0</summary>
<ul>
  <li>Added adaptive anchors. Anchors now automatically arrange themselves in an aesthetically pleasing way without user input. Adaptive anchors are now the default anchor mode.</li>
  <li>Added dynamic anchors. Anchors now automatically shift position when nodes are moved to preserve aesthetics.</li>
  <li>Added custom positioning of anchors. Users are able to specify custom positions of anchors using callbacks</li>
  <li>Added accessibiilty features for edges. Edges now highlight on hover to make edge interactions easier.</li>
  <li>Added functionality to resize nodes by dragging their bottom-right corner</li>
  <li>Added custom classes for edges to allow for uniform styling</li>
  <li>Added click event for edges that execute a user-defined callback</li>
  <li>Added functionality to edit edges by right-clicking on a node to bring up a modal</li>
  <li>Added feature to expand and collapse tree nodes. 
  <li>Updated documentation page on website to include new features</li>
  <li>Updated home page to include newest collaborators</li>
  <li>Solved github issue #s: </li>
</ul>
</details>

<details><summary>v5.0.0</summary>
<ul>
  <li>Now compatible with Safari (5.0.7 update)</li>
  <li>Added interactive node linking & creation</li>
  <li>Added ability to load custom Svelte components as nodes</li>
  <li>Added an optional minimap that allows you to visualize larger diagrams</li>
  <li>Added progammatic initial zoom and location</li>
  <li>Added custom classes for nodes to allow for uniform styling</li>
  <li>Added a feature that allows you to export and import diagrams</li>
  <li>Added an optional boundary to the diagram</li>
  <li>Added functionality to edit nodes by right-clicking on a node to bring up a modal</li>
  <li>Added an optional feature that allows users to delete nodes</li>
  <li>NOTE: Please make sure to give nodes and edges unique IDs to prevent forEach key duplicate error!</li>
  <li>Solved github issue #s: 65, 78, 80, 81, 85, 86, 104, 105, 146, 147, 148, 151, 153, 158</li>
  <li>Updated documentation page on website to include new features</li>
  <li>Updated home page to include newest collaborators</li>
</ul>
</details>
<details><summary>v4.0.0</summary>
<ul>
  <li>Added ability to include HTML in inside of nodes (i.e. videos, sounds, etc)</li>
  <li>Added NPM Package folder in root directory of GitHub repo</li>
  <li>this folder is used for adding changes to library & pushing updates to NPM; included here to have version control through GitHub</li>
  <li>Added snap-to-grid functionality for use during runtime in the canvas (GitHub Issue 107)</li>
  <li>Corrected issue where nodes become magnetized when moved outside of the visible canvas boundaries (GitHub Issues 120 & 125)</li>
  <li>Removed unused dotenv & node.env dependency from NPM Package package.json (GitHub Issue 118)</li>
  <li>Moved all dependancies in devDependancies to regular dependancies object, except for d3-zoom which is used by the client during runtime</li>
  <li>Added group nodes functionality</li>
  <li>Updated main website page to include newest set of collaborators</li>
  <li>Added CSS option for canvas background</li>
  <li>Added documentation for HTML in nodes, snap-to-grid, canvas background coloring, and node grouping to website documents</li>
  <li>General refactoring throughout application to improve responsiveness and decrease size</li>
  <li>Created documentation to assist future developers in understanding the flow of data in Svelvet and provide list of potential updates/upgrades</li>
</ul>
</details>
<details><summary>v3.0.0</summary>
<ul>
  <li>Added right-click context menu functionality on REPL playground page</li>
  <li>Added capability to add custom nodes and edges via context menu</li>
  <li>Added custom node/edge shortcuts for optimized user experience</li>
  <li>Incorporated dynamic addition of custom node/edge via predictive algorithm</li>
  <li>Added ability to copy text from code editor</li>
  <li>Node diagrams now have the option to be fixed in place</li>
  <li>Added tutorial overlay for REPL playground page</li>
  <li>Added ability to access quick view documentation via popup modal</li>
  <li>Updated documentation to allow easier contributor access('.env' file setup)</li>
  <li>Updated Community link on website to redirect to Svelvet thread on Stackoverflow</li>
  <li>Implemented skeleton codebase for a Community Forum with full database/route accessibility(for future contributors)</li>
</ul>
</details>
<details><summary>v2.0.2</summary>
<ul>
  <li>Added left and right anchor points</li>
  <li>Added step and smoothstep edge types</li>
  <li>Incorporated mixed edge functionality</li>
  <li>Refactored how edge text and labels render for every edge</li>
  <li>Fixed D3Zoom bias bug</li>
  <li>Expanded styling options, including label color, label background, and edge color</li>
  <li>Nodes are now able to contain images and will render differently based on the presence of label text</li>
  <li>Nodes are now draggable on touch screens and reposition themselves to center on your touch</li>
  <li>Implemented data reactivity</li>
  <li>Expanded TypeScripting</li>
  <li>Added E2E testing using Cypress</li>
  <li>Expanded unit tests</li>
  <li>Added a REPL to our documentation site</li>
  <li>Added SQL database to our REPL</li>
  <li>Added GitHub OAuth to enable users to save their custom diagrams created in our new REPL</li>
  <li>Expanded documentation for new features</li>
  <li>Added full CI/CD pipeline</li>
</ul>
</details>
<details><summary>v1.0.3</summary>
<ul>
  <li>Fixed bug with running tests</li>
  <li>Added ability to render multiple unique Svelvet components</li>
  <li>Added a 'clickCallback' customization option for nodes</li>
</ul>
</details>
<details><summary>v1.0.2</summary>
<ul>
  <li>Fixed bug with importing types for TypeScript applications</li>
  <li>Added a 'borderRadius' customization option for nodes</li>
  <li>Fixed SVG zoom/pan bug (zoom/pan is now limited to Svelvet component only)</li>
</ul>
</details>

## Key Features

- **Easy to use:** To get [started](https://svelvet.mintlify.app/getting-started/installation) with Svelvet, all you need is data for nodes and edges. Visit our [documentation website](https://svelvet.mintlify.app/) for streamlined, user-friendly tutorials and examples on how to get the most out of your Svelvet interfaces!
- **Interactive:** Elegant and smooth interface when selecting a node to drag it across the graph.
- **Customizable:** Fully customizable Edges, Nodes, Backgrounds and components
- **Reliable:** Svelvet is written in TypeScript and tested with [Vitest](https://vitest.dev/), [Playwright](https://www.playwright.dev/) and [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/). Svelvet is maintained by motivated engineers seeking to contribute to the larger Svelte developer community and library ecosystem.
- **Room to Grow:** There is so much we can do to improve, add features and make Svelvet the best version of itself - we welcome feedback and contributions! Scroll below for suggestions on what to contribute.

## Installation

Svelvet is available as both an npm and a yarn package. You can install it by running one of the two commands:

```bash
npm install svelvet
```

```bash
yarn add svelvet
```

## Quick Start

Start by importing the Svelvet and Node components into your application:

```js
import { Svelvet, Node, Anchor, Edge } from 'svelvet';
```

A Svelvet canvas primarily consists of Nodes. You can pass any number of Nodes as children to the Svelvet wrapper. You can use all the standard conditional rendering syntax to populate nodes within the Svelvet component. Basic parameters like color, input and output count, label and more can be specified and feature two-way data binding with passed props. For greater customization, wrap your own custom components in our Node component and pass the whole thing to Svelvet.

Nodes, Edges and Anchors all feature click events, properties and functions to allow developers to fully customize the state of their graphs.

When creating custom Nodes, you can position any number of our Anchor components to enable dynamic connections. You can also wrap Nodes in a Group component to limit their boundaries and move them as one. These groups can be created dynamically by Shift + Click and dragging.

Finally, you can render our Controls, Minimap, Background and Theme Toggle components via props or named slots. In the latter use case, you can pass props to further customize them. The Controls component can wrap your own set of buttons as we expose the zoom/reset/lock actions using a let directive.

Svelvet is focused on dynamic edge connections, but if you'd like to specify edges ahead of time, you can pass an array of connections to any Anchor component. You can also pass a custom Edge component!

For more detailed use cases and examples, please visit svelvet.io.

```jsx
<Svelvet width={500} height={500} theme="dark" initialZoom={0.6} minimap>
	<Node />
	<Node label="Demo Node" TD />
	<Node id="node-id" inputs={2} />
	<Node bgColor="red" inputs={10} outputs={5} height={200} position={{ x: 100, y: 100 }} />
	<Controls slot="controls" horizontal />
</Svelvet>
```

Visit our [website](https://svelvet.io) to learn more!

## Testing

Testing is done with Playwright and the Svelte Testing Library. You can find tests in the [/tests](https://github.com/open-source-labs/Svelvet/tree/main/test) folder. We plan on dramatically expanding test coverage very soon. In order to run the tests use the command:

For End-to-End testing

```bash
npx playwright test
```

## The Svelvet Team

- Brian Holmes • [LinkedIn](https://www.linkedin.com/in/briangregoryholmes/) • [Github](https://github.com/briangregoryholmes)
- Britta Ager • [LinkedIn](https://www.linkedin.com/in/britta-ager-84394a129) • [Github](https://github.com/bkager)
- Thomas Kady • [LinkedIn](https://www.linkedin.com/in/thomas-kady-45725b149) • [Github](https://github.com/thomaskady)
- Jen Lee • [LinkedIn](https://www.linkedin.com/in/jenleesj) • [Github](https://github.com/sjjen)
- Ernesto Gonzalez • [LinkedIn](https://www.linkedin.com/in/ernesto-gonzalez123) • [Github](https://github.com/ErnestoGonza)
- Michael Chiang • [LinkedIn](https://www.linkedin.com/in/michael-chiang-84509025b/) • [Github](https://github.com/michael-chiang-dev5)
- Rachel He • [LinkedIn](https://www.linkedin.com/in/rachel-he-8200563b/) • [Github](https://github.com/rachelheplus)
- Horacio Vallejo • [LinkedIn](https://www.linkedin.com/in/horacio-vallejo-100643187/) • [Github](https://github.com/horaciovallejo)
- Aaron Willett • [LinkedIn](https://www.linkedin.com/in/awillettnyc/) • [Github](https://github.com/awillettnyc)
- Alexander Zambrano • [LinkedIn](https://www.linkedin.com/in/alexander-z-8b7716b0/) • [Github](https://github.com/azambran21)
- Andrew Widjaja • [LinkedIn](https://www.linkedin.com/in/andrew-widjaja/) • [Github](https://github.com/andrew-widjaja)
- Anu Sharma • [LinkedIn](https://www.linkedin.com/in/anu-sharma-6936a686/) • [Github](https://github.com/anulepau)
- Justin Wouters • [LinkedIn](https://www.linkedin.com/in/justinwouters/) • [Github](https://github.com/justinwouters)
- Walter DeVault • [LinkedIn](https://www.linkedin.com/in/walter-devault/) • [Github](https://github.com/TensionCoding)
- Ali Adams • [LinkedIn](https://www.linkedin.com/in/alimadams/) • [Github](https://github.com/AliA12336)
- Von Garcia • [LinkedIn](https://www.linkedin.com/in/gerard-von-g-3964bb160/) • [Github](https://github.com/vongarcia97)
- Damian Lim • [LinkedIn](https://www.linkedin.com/in/lim-damian/) • [Github](https://github.com/limd96)
- Christopher Mander • [LinkedIn](https://www.linkedin.com/in/christopher-mander/) • [Github](https://github.com/cpmander)
- David Jakubiec • [LinkedIn](https://www.linkedin.com/in/david-jakubiec-16783384/) • [Github](https://github.com/davidjakubiec)
- Jeffrey Wentworth • [LinkedIn](https://www.linkedin.com/in/jeffreywentworth/) • [Github](https://github.com/jeffreywentworth)
- Johnny Tran • [LinkedIn](https://www.linkedin.com/in/tranpjohnny/) • [Github](https://github.com/JTraan)
- Samee Vohra • [LinkedIn](https://www.linkedin.com/in/sameev/) • [Github](https://github.com/sameev)
- Abhi Gullapalli • [LinkedIn](https://www.linkedin.com/in/viswa-gullapalli-442802253/) • [Github](https://github.com/aubertlone)
- Ian Hnizdo • [LinkedIn](https://www.linkedin.com/in/ian-hnizdo/) • [Github]()
- Mauricio Castro • [LinkedIn](https://www.linkedin.com/in/mauricioacastro/) • [Github](https://github.com/sher85)
- Ryan Potter • [LinkedIn](https://www.linkedin.com/in/ryan-potter-0105b6100) • [Github](https://github.com/rpotter0811)
- Emma Ferguson • [LinkedIn](https://www.linkedin.com/in/emma-ferguson-33858725a/) • [Github](https://github.com/emmanotly)
- Dillon McKenna • [LinkedIn](https://www.linkedin.com/in/dillon-mckenna/) • [Github](https://github.com/dmckenna44)
- Taylor Alan • [LinkedIn](https://www.linkedin.com/in/taylor-alan-026a49226/) • [Github](https://github.com/taylien96)
- Timmy Lem • [LinkedIn](https://www.linkedin.com/in/timmy-lem/) • [Github](https://github.com/timmylem01)
- Tony Lim • [LinkedIn](https://www.linkedin.com/in/tonylim467/) • [Github](https://github.com/tonyy467)

## How to Contribute

Read `src/lib/doc/README.md` for suggestions on how to get started!

The following is a list of features and improvements by ourselves and the larger Svelte community for any open source developer to contribute. If you have any additional ideas, feel free to raise the issue or implement them as well!

- Premade node menu with drag & drop abilities
- Add documentation/video tutorial on how to set up a Svelvet demo
- Custom error handling
- Increase test coverage for scalability
- Checkout the [Roadmap](https://svelvet.mintlify.app/roadmap) for a current list of active projects
- GET CREATIVE!! Svelvet is an amazing project that has so much room to grow.

## Credits

Inspired by [React Flow](https://github.com/wbkd/react-flow), Svelvet expands the tools available to Svelte developers and makes Svelte more inviting to both new and seasoned software engineers.

## License

Svelvet is developed under the [MIT license](https://github.com/open-source-labs/Svelvet/blob/main/LICENSE).
