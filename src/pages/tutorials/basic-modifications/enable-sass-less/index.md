---
title: Enable SASS or LESS support
---

# Enable SASS or LESS support

This tutorial provides the steps to enable SASS or LESS support in your storefront project.
Use these Webpack configurations to add support for SASS and LESS alongside [CSS Modules][].

[css modules]: /guides/general-concepts/css-modules/

## Add SASS support

### Step 1. Install dependencies

Use a package manager, such as `yarn` or `npm`, to install the SASS loader as a dev dependency.

```sh
yarn add --dev sass-loader node-sass
```

### Step 2. Modify the Webpack configuration

Edit `webpack.config.js` and add a new `config` rule entry:

```diff

    config.plugins = [
        ...config.plugins,
        new DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            POSSIBLE_TYPES: JSON.stringify(possibleTypes),
            STORE_NAME: JSON.stringify('Venia')
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ];
+
+   config.module.rules.push({
+       test: /\.s[ca]ss$/,
+       use: [
+           'style-loader',
+           {
+               loader: 'css-loader',
+               options: {
+                   modules: true,
+                   sourceMap: true,
+                   localIdentName: '[name]-[local]-[hash:base64:3]'
+               }
+           },
+           'sass-loader'
+       ]
+   });
```

### Step 3. Create a SASS file and import it in a component

Create the `myComponent.scss` file:

```scss
$button-color: #ff495b;
$button-color-hover: #ff9c1a;

.root {
  padding: 15px;
}

.button {
  color: $button-color;

  &:hover {
    color: $button-color-hover;
  }
}
```

Create a component and import the SASS file:

```jsx
import React from "react";
import defaultClasses from "./myComponent.scss";

const MyComponent = () => (
  <div className={defaultClasses.root}>
    <button className={defaultClasses.button}>My Component</button>
  </div>
);

export default MyComponent;
```

## Add LESS support

### Step 1. Install dependencies

Use a package manager, such as `yarn` or `npm`, to install the LESS loader as a dev dependency.

```sh
yarn add --dev less-loader less
```

### Step 2. Modify the Webpack configuration

Edit `webpack.config.js` and add a new `config` rule entry:

```diff

    config.plugins = [
        ...config.plugins,
        new DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            POSSIBLE_TYPES: JSON.stringify(possibleTypes),
            STORE_NAME: JSON.stringify('Venia')
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ];
+
+   config.module.rules.push({
+       test: /\.less$/,
+       use: [
+           'style-loader',
+           {
+               loader: 'css-loader',
+               options: {
+                   modules: true,
+                   sourceMap: true,
+                   localIdentName: '[name]-[local]-[hash:base64:3]'
+               }
+           },
+           'less-loader'
+       ]
+   });
```

### Step 3. Create a LESS file and import it on your component

Create the `myComponent.less` file:

```less
@button-color: #ff495b;
@button-color-hover: #ff9c1a;

.root {
  padding: 15px;
}

.button {
  color: @button-color;

  &:hover {
    color: @button-color-hover;
  }
}
```

Create a component and import the LESS file:

```jsx
import React from "react";
import defaultClasses from "./myComponent.less";

const MyComponent = () => (
  <div className={defaultClasses.root}>
    <button className={defaultClasses.button}>My Component</button>
  </div>
);

export default MyComponent;
```
