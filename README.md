# Flex Layout System v2

**Effortlessly create dynamic, responsive grids with minimal code.**

**Why Flex Layout System?**

- **Built-in Responsiveness:** Predefined breakpoints (`xs, sm, md, lg, xl, xxl`) – no media queries needed.
- **Customizable Breakpoints:** Adjust `DEFAULT_MEDIA_SIZES` to fit your unique design requirements.
- **Self-Contained Styling:** All styles are encapsulated inside components – clean, consistent, and portable.
- **Framework Agnostic:** Works seamlessly in plain HTML, Angular, Next.js, and more.
- **Intuitive and Simple:** Write familiar HTML-like syntax and get powerful layouts out of the box.

**Quick Example:**

```html
<flex-canvas w="1200px">
  <flex-grid gap="50px, xs 10px, sm 20px, md 40px">
    <flex-box center wrap dn="row, xs column">
      <flex-cell w="50%, sm 100%">
        <s-box center bgc="red" pd="20px, sm 10px">Box 1</s-box>
      </flex-cell>
      <flex-cell w="50%, sm 100%">
        <s-box center bgc="green" pd="20px, sm 10px">Box 2</s-box>
      </flex-cell>
    </flex-box>
  </flex-grid>
</flex-canvas>
```

[![Website](https://img.shields.io/badge/Website-Official-blue)](https://flexlayout.com/)
[![npm](https://img.shields.io/badge/npm-Package-red)](https://www.npmjs.com/package/flex-layout-system)
[![Documentation](https://img.shields.io/badge/Docs-Documentation-green)](https://flexlayout.com/docs)

## Responsive Design Made Easy

Flex Layout System v2 is built with responsiveness at its core. You don’t need to write media queries or fiddle with CSS—everything is managed directly through attributes.

### Breakpoints

The system supports six predefined breakpoints:

- **`xs`**: Extra small (default: 0–600px)
- **`sm`**: Small (default: 601–900px)
- **`md`**: Medium (default: 901–1200px)
- **`lg`**: Large (default: 1201–1440px)
- **`xl`**: Extra large (default: 1441–1920px)
- **`xxl`**: Ultra large (default: 1921px and above)

### How It Works

Simply define responsive values for your attributes, separated by commas, and the library will handle the rest. For example:

```html
<flex-grid gap="50px, xs 10px, sm 20px, md 40px">
  <flex-box dn="row, xs column">
    <flex-cell w="50%, sm 100%">
      <s-box pd="20px, sm 10px">Responsive Box</s-box>
    </flex-cell>
  </flex-box>
</flex-grid>
```

- gap: Adjusts the spacing between grid items for different screen sizes.
- dn (direction): Switches from row to column layout on small screens (xs).
- w (width): Changes cell width to 100% on smaller screens (sm).
  and more... see the [documentation](https://flexlayout.com/docs) for a full list of attributes.

### Custom Breakpoints

Need specific breakpoints? Customize them globally using **DEFAULT_MEDIA_SIZES**:

```js
window.DEFAULT_MEDIA_SIZES = {
  xs: 500, // Extra small screens
  sm: 800, // Small screens
  md: 1100, // Medium screens
  lg: 1400, // Large screens
  xl: 1800, // Extra large screens
  xxl: 2400, // Ultra large screens
};
```

This allows you to align the breakpoints with your unique design needs, and all responsive attributes will automatically adapt to your configuration.

### Why It’s Powerful

- No Extra CSS: Responsive logic is baked directly into your components.
- Consistency: Predefined breakpoints ensure layouts look great across all devices.
- Customizability: Adjust breakpoints once, and the entire layout adapts globally.
- Ease of Use: Declare responsive values directly in your markup, no coding required.
- With Flex Layout System, responsiveness is not an afterthought—it’s seamless and effortless.

## Get Started ### Browser / Compiled Version / Source Web Components 1.

**Installation**: Install the Flex Layout System package via npm:

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
</flex-box>;
```

3. **Important**: This library uses Shadow DOM and is purely client-side, meaning it will only work on the client side. You can write syntax similar to regular HTML, but rendering will be handled exclusively on the client.

4. Ensure the library is imported on the client side. If you're using `"use client"`, Next.js will handle the import correctly. However, if you're working with a server component, it won't render! You must ensure the script is loaded on the client side, either using lazy loading methods provided by Next.js or by utilizing `Script` from `next/script` to load the library as a polyfill for web component support on the client.

```js
import Script from "next/script";

export default function MyComponent() {
  return (
    <>
      <Script
        src="https://unpkg.com/flex-layout-system/dist/browser.min.js"
        strategy="lazyOnload"
      />
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

## Conclusion

## Conclusion

Flex Layout System v2 redefines layout design for modern web developers, offering a streamlined, responsive, and highly maintainable solution. With fewer components, built-in styling, and intuitive responsiveness, it seamlessly integrates into any project or framework, enabling you to build sophisticated layouts effortlessly.

Explore more features, examples, and documentation on the [official website](https://flexlayout.com).

## Developer

[![unbywyd](https://img.shields.io/badge/unbywyd-Web_Developer-green)](https://unbywyd.com)

[![AI Web Solutions](https://img.shields.io/badge/AI_Web_Solutions-aiweb.co.il-black)](https://aiweb.co.il)

This project was developed by **unbywyd**.
