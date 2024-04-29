# Introducing Flex Layout System: Empowering Effortless Web Design

Flex Layout System is a powerful library of web components designed to enhance web design development. It provides a range of flexible components for effortless layout creation and grid implementation. The primary objective of Flex Layout System is to simplify the process of building responsive layouts across different projects and frameworks.

Key advantages of Flex Layout System include its intuitive component names, which eliminate the need for complex div structures. The "flex-box" serves as the container, while the "flex-cell" acts as the adaptable building block within the grid. This simplicity improves efficiency and promotes cleaner, more maintainable code.

By importing Flex Layout System just once, you can seamlessly integrate it into any project and framework. The library offers well-designed components with thoughtful nesting, making it easy to customize gaps, grids, columns, and responsiveness. Additionally, the styles of these components are applied to the host element, allowing for effortless customization and overrides. Supplementary components are also included, providing efficient tools for rapid layout design with minimal CSS requirements.

**See more on official website**: [https://flex-layout-system.netlify.app/](https://flex-layout-system.netlify.app/)

## Get Started

### Browser / Compiled version / Sources Web Components

To get started with Flex Layout System, follow these simple steps:

Step 1: Install the package Run the following command in your project to install the Flex Layout System package from npm:

```bash
npm install flex-layout-system
```

Step 2: Importing and using the components In your TypeScript/JS file. For example, to use the base layout without utilities and styles, import the following:

```js
// Import including types
import "flex-layout-system";

// Optional. If you want to use the responsive utilities based on CSS Media Queries, import the following:
import "flex-layout-system/dist/css-responsive.min.css";

// Optional: If you want to use the responsive utilities based on the JavaScript system using the flex-media component, import the following:
import "flex-layout-system/dist/js-responsive.min.css";
```

If yow want to use this library in your HTML file (browser), you can use the following:

```html
<!-- Only one of the following is required. -->
<!-- If you want to use the base layout, import the following: -->
<script src="https://unpkg.com/flex-layout-system/dist/browser-layout.min.js"></script>

<!-- If you want to use the layout with utilities, import the following: -->
<script src="https://unpkg.com/flex-layout-system/dist/browser.min.js"></script>

<!-- Optional. If you want to use the responsive utilities based on CSS Media Queries, import the following: -->
<link
  rel="stylesheet"
  href="https://unpkg.com/flex-layout-system/dist/css-responsive.min.css"
/>

<!-- Optional: If you want to use the responsive utilities based on the JavaScript system using the flex-media component, import the following: -->
<link
  rel="stylesheet"
  href="https://unpkg.com/flex-layout-system/dist/js-responsive.min.css"
/>
```

### React

If you want to use this library in your React project, you can use the following:

- You need to install a package for React `flex-layout-system-react` [npm](https://www.npmjs.com/package/flex-layout-system-react)

```bash
npm install flex-layout-system-react
```

- Import the package in your React project

```js
import "flex-layout-system-react";
```

- Use the components in your React project

```jsx
import React from "react";
import {
  FlexBox,
  FlexCanvas,
  FlexGrid,
  FlexCell,
  StyleBox,
} from "flex-layout-system-react";

// If you want to use the responsive utilities based on CSS Media Queries, import the following:
// Note: Note that styles are imported from the flex-layout-system package
import "flex-layout-system/dist/css-responsive.min.css";

function App() {
  return (
    <FlexCanvas width="1200px">
      <FlexGrid gap="20px">
        <FlexBox>
          <FlexCell>
            <StyleBox bgc="#CCC" pd="20px"></StyleBox>
          </FlexCell>
          <FlexCell>
            <StyleBox bgc="#CCC" pd="20px"></StyleBox>
          </FlexCell>
        </FlexBox>
      </FlexGrid>
    </FlexCanvas>
  );
}

export default App;
```

### NextJS

```js
"use client"; // This is required for NextJS, you need to add this line at the top of the file but not in page.ts file, you need to create a new file in the components folder and import it in the page.ts file with this line

import "flex-layout-system/jsx.types.d"; // Import types
import "flex-layout-system"; // Import components

// Just use the web components in your JSX file, for example:
<flex-box jc="space-between">
  <span>1</span>
  <span>1</span>
</flex-box>;
```

### Angular

If you want to use this library in your Angular project, you can use the following:

- You need to install a main package `flex-layout-system` [npm](https://www.npmjs.com/package/flex-layout-system)

```bash
npm install flex-layout-system
```

- Import the package in your Angular project

```js
import "flex-layout-system";
```

- Use the components in your Angular project

```js
  import "flex-layout-system";
  import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

  @NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
```

- If you want to use the responsive utilities based on CSS Media Queries, import the following:

```js
import "flex-layout-system/dist/css-responsive.min.css";
```

or in your `angular.json` file

```json
"styles": [
  "node_modules/flex-layout-system/dist/css-responsive.min.css"
]
```
