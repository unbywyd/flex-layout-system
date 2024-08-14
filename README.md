# Introducing Flex Layout System v2: Simplifying Responsive Web Design

Flex Layout System v2 is a streamlined library of web components designed to make responsive web design effortless. This new version brings several improvements, including a reduced number of components, built-in responsiveness, and no external stylesheets—everything is neatly packaged within the components themselves.


[![Website](https://img.shields.io/badge/Website-Official-blue)](https://flexlayout.com/)
[![npm](https://img.shields.io/badge/npm-Package-red)](https://www.npmjs.com/package/flex-layout-system)
[![Documentation](https://img.shields.io/badge/Docs-Documentation-green)](https://flexlayout.com/docs)


## Key Features

- **Simplified Components**: The number of components has been significantly reduced, making them more intuitive and powerful. Each component is thoughtfully designed to cover a wide range of use cases.
- **Built-in Responsiveness**: Components now include built-in responsive behavior, eliminating the need for additional media queries or breakpoints.
- **Self-contained Styles**: All styles are encapsulated within the components, ensuring consistency and reducing the need for external CSS files.
- **Framework Agnostic**: Flex Layout System v2 is compatible with any framework or project, whether you're using React, Angular, or plain HTML/JS.

## Get Started

### Browser / Compiled Version / Source Web Components

1. **Installation**:
   Install the Flex Layout System package via npm:

```bash
npm install flex-layout-system
```

2. **Importing Components**:
   In your JavaScript or TypeScript file, import the library:

```js
import "flex-layout-system";
```

To use the components directly in an HTML file:

```html
<script src="https://unpkg.com/flex-layout-system/dist/browser.min.js"></script>
```

## Using Flex Layout System in React / Next.js

To use this library in your Next.js project:

1. Install the package:

```bash
npm install flex-layout-system
```

2. In your component file, add "use client" at the top:

```js
"use client"; 

import "flex-layout-system/jsx.types.d"; // Import JSX types
import "flex-layout-system"; // Import components

// Example usage:
<flex-box jc="space-between">
  <span>1</span>
  <span>2</span>
</flex-box>
```

3. **Important**: This library uses Shadow DOM and is purely client-side, meaning it will only work on the client side. You can write syntax similar to regular HTML, but rendering will be handled exclusively on the client.

4. Ensure the library is imported on the client side. If you're using `"use client"`, Next.js will handle the import correctly. However, if you're working with a server component, it won't render! You must ensure the script is loaded on the client side, either using lazy loading methods provided by Next.js or by utilizing `Script` from `next/script` to load the library as a polyfill for web component support on the client.

```js
import Script from "next/script";

export default function MyComponent() {
  return (
    <>
      <Script src="https://unpkg.com/flex-layout-system/dist/browser.min.js" strategy="lazyOnload" />
      <flex-box jc="space-between">
        <span>1</span>
        <span>2</span>
      </flex-box>
    </>
  );
}
```

## Using Flex Layout System in Angular

1. **Installation**:
   Install the package in your Angular project:

```bash
npm install flex-layout-system
```

2. **Import Components**:
   Import the library in your Angular module:

```js
import "flex-layout-system";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

3. **Use Components:**
   Integrate the components into your Angular templates as needed.

## Components Overview

Here’s a brief overview of the key components available in Flex Layout System v2:

- **`flex-canvas`**: The primary container component, used to manage the overall dimensions of the layout. It serves as the foundational wrapper in which other components, like `flex-grid` or `flex-box`, can be nested.
- **`flex-grid`**: The main container for creating grid-based layouts. It allows you to define a grid with customizable spacing between grid cells, providing a structured and organized layout.
- **`flex-box`**: A flexible container component designed to manage flexbox logic. It controls the alignment, direction, wrapping, and spacing of its child elements, making it ideal for responsive layouts within the grid.
- **`flex-cell`**: The building blocks within the `flex-grid`. These are individual cells that make up the grid structure, and they can be customized for size, order, and alignment to fit various layout needs.
- **`flex-media`**: A specialized component that monitors the size of a local container and adjusts its content accordingly. It's particularly useful for creating responsive designs that adapt to different screen sizes or container dimensions.
- **`d-box`**: A dynamic box that adapts its display properties based on media queries, allowing for flexible and responsive content presentation.
- **`space-box`**: A component for adding controlled spacing within layouts. It offers options for stretching and setting specific dimensions, making it easy to manage empty spaces or gaps.
- **`s-box`**: A versatile box component that provides extensive styling and layout control. It includes options for text alignment, padding, margins, and more, making it a flexible tool for fine-tuning the design.

## Conclusion

Flex Layout System v2 is a powerful tool for web developers, making it easier than ever to create responsive, clean, and maintainable layouts. With a reduced number of components and built-in styling, it's designed to fit seamlessly into any project or framework.

For more information and examples, visit the [official website](https://flexlayout.com).


## Developer

[![unbywyd](https://img.shields.io/badge/unbywyd-Web_Developer-green)](https://unbywyd.com)

[![AI Web Solutions](https://img.shields.io/badge/AI_Web_Solutions-aiweb.co.il-black)](https://aiweb.co.il)

This project was developed by **unbywyd**.

