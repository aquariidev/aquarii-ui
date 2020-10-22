---
title: Button
description: Button are the core of every project
order: 3
---

## Filled Button

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

By default Standard button ( without type props) will be serve as a outline button

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

If the inner button does not have same height and size it will creat a pill button

<div class="flex items-center">
  <aq-button circle type="primary mr-2">Circle Button</aq-button>

  <aq-button circle type="primary">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
  </aq-button>
</div>

```html
<aq-button circle type="primary">Circle Button</aq-button>
```