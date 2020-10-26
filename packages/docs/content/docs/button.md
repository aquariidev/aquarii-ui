---
title: Button
description: Button are the core of every project
order: 3
options:
  - option: type
    value: string
    default: '-'
    desc: The color of button component
  - option: size
    value: string['small', 'large']
    default: '-'
    desc: The size of button
  - option: block
    value: any
    default: undefined
    desc: Button block display
  - option: circle
    value: any
    default: undefined
    desc: Circle button
  - option: icon
    value: any
    default: undefined
    desc: Icon button
---

## Filled Button

By default button will serve as filled button.

<aq-button>Standard Button</aq-button>
<aq-button type="primary">Primary Button</aq-button>
<aq-button type="success">Success Button</aq-button>
<aq-button type="danger">Danger Button</aq-button>

```html
<aq-button>Standard Button</aq-button>
<aq-button type="primary">Primary Button</aq-button>
<aq-button type="success">Success Button</aq-button>
<aq-button type="danger">Danger Button</aq-button>
```

## Outline Button

Outline button will display only the border without background.

<aq-button outline>Standard Button</aq-button>
<aq-button type="primary" outline>Primary Button</aq-button>
<aq-button type="success" outline>Success Button</aq-button>
<aq-button type="danger" outline>Danger Button</aq-button>

```html
<aq-button>Standard Button</aq-button>
<aq-button type="primary" outline>Primary Button</aq-button>
<aq-button type="success" outline>Success Button</aq-button>
<aq-button type="danger" outline>Danger Button</aq-button>
```

All event handler from html button or vue directive can be add to this component

<example-alert-button>Show Alert</example-alert-button>

```html
<aq-button @click="showAlert" type="primary">
  Show Alert
</aq-button>
```

## Button Size

there is a 3 types of button size, standard ( without props), small and large

<aq-button type="primary" size="small">Small Button</aq-button>
<aq-button type="primary">Standard Button</aq-button>
<aq-button type="primary" size="large">Large Button</aq-button>

## Button Groups

Button groups will add border radius on first and last buttons

<aq-button-group>
  <aq-button>Prev</aq-button>
  <aq-button>Next</aq-button>
</aq-button-group>

```html
<aq-button-group>
  <aq-button>Prev</aq-button>
  <aq-button>Next</aq-button>
</aq-button-group>
```

## Block Button

Block buttons extend the full available width.

<aq-button block type="primary">Block Button</aq-button>

```html
<aq-button block>Next</aq-button>
```

## Circle Button

If the inner button does not have same height and size it will create a pill button, you can use this props to create icon button.

<div class="flex items-center">
  <aq-button circle type="primary mr-2">Circle Button</aq-button>

  <aq-button circle type="primary">
    <aq-icon name="pencil"></aq-icon>
  </aq-button>
</div>

```html
<aq-button circle type="primary">Circle Button</aq-button>
```