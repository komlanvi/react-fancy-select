# react-fancy-select

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

[build-badge]: https://travis-ci.com/matt-simpson/react-fancy-select.svg?branch=master
[build]: https://travis-ci.com/matt-simpson/react-fancy-select
[npm-badge]: https://img.shields.io/npm/v/react-fancy-select.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-fancy-select

## So you want a styled select box?

Your designer has supplied you with a awesome looking select / dropdown list, not knowing that we still can't style native selects nicely.

## Solution

With react-fancy-select, you're provided a custom implementation of a select / dropdown that you can style as much as you like.

## Installation

```
npm i react-fancy-select
```

```
yarn add react-fancy-select
```

## Usage

```
import React from "react";
import FancySelect from "react-fancy-select";
import "react-fancy-select/lib/react-fancy-select.css";

const items = [{
  id: 0,
  value: 'Apple',
  text: 'Apple',
}, {
  id: 1,
  value: 'Orange',
  text: 'Orange',
}, {
  id: 2,
  value: 'Pear',
  text: 'Pear',
}];

const Component = () => (
    <FancySelect
        items={items}
        onSelection={(item) => alert(`You selected ${item.text}`)}
    />
);
```

## Props

| Property      | Type     | Default            | Description                                                                                                      |
| :------------ | :------- | :----------------- | :--------------------------------------------------------------------------------------------------------------- |
| `items`       | array    | undefined          | array of items                                                                                                   |
| `onSelection` | function | undefined          | callback fires upon item selection with selected object as parameter                                             |
| `useNative`   | boolean  | true               | if true, positions and hides a select element on top of the component on mobile devices to trigger native select |
| `placeholder` | string   | `Please select...` | placeholder text to display before selection                                                                     |
| `name`        | string   | null               | name to give to select element if being used in a form for requests                                              |

## Styling

| Property                          | Description                                             |
| :-------------------------------- | :------------------------------------------------------ |
| `.FancySelect__Control`           | the visible select component wrapper                    |
| `.FancySelect__List`              | the dropdown list                                       |
| `.FancySelect__ListItem`          | the dropdown list items                                 |
| `.FancySelect__ListItem:hover`    | the dropdown list items on hover                        |
| `.FancySelect__ListItem--focused` | the dropdown list items on focus (with keyboard arrows) |

## Todo

- Write additional tests.
- In-depth browser testing.
