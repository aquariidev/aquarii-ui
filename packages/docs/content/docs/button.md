---
title: Button
description: Button are the core of every project
group: components
order: 5
props:
  - option: color
    value: string
    default:
    desc: The color of button component
  - option: size
    value: string['small', 'large']
    default:
    desc: The size of button
  - option: block
    value: any
    default:
    desc: Button block display
  - option: circle
    value: any
    default:
    desc: Circle button
  - option: icon
    value: any
    default:
    desc: Icon button
  - option: raised
    value: any
    default:
    desc: Raise the button above page
  - option: loading
    value: boolean
    default: false
    desc: Loading indicator
---

## Filled Button

By default button will serve as filled button.

<aq-button>Standard Button</aq-button>
<aq-button color="primary">Primary Button</aq-button>
<aq-button color="success">Success Button</aq-button>
<aq-button color="danger">Danger Button</aq-button>

```html
<aq-button>Standard Button</aq-button>
<aq-button color="primary">Primary Button</aq-button>
<aq-button color="success">Success Button</aq-button>
<aq-button color="danger">Danger Button</aq-button>
```

## Outline Button

Outline button will display only the border without background.

<aq-button outline>Standard Button</aq-button>
<aq-button color="primary" outline>Primary Button</aq-button>
<aq-button color="success" outline>Success Button</aq-button>
<aq-button color="danger" outline>Danger Button</aq-button>

```html
<aq-button>Standard Button</aq-button>
<aq-button color="primary" outline>Primary Button</aq-button>
<aq-button color="success" outline>Success Button</aq-button>
<aq-button color="danger" outline>Danger Button</aq-button>
```

All event handler from html button or vue directive can be add to this component

<example-alert-button>Show Alert</example-alert-button>

```html
<aq-button @click="showAlert" color="primary">
  Show Alert
</aq-button>
```

## Button Size

there is a 3 colors of button size, standard ( without props), small and large

<aq-button color="primary" size="small">Small Button</aq-button>
<aq-button color="primary">Standard Button</aq-button>
<aq-button color="primary" size="large">Large Button</aq-button>

## Button Groups

Button groups will add border radius on first and last buttons.

<div class="flex items-end">
  <div class="mr-2">
    <aq-button-group>
      <aq-button color="primary">Prev</aq-button>
      <aq-button color="primary">Next</aq-button>
    </aq-button-group>
  </div>

  <aq-button-group>
    <aq-button>
      <aq-icon name="rewind"></aq-icon>
    </aq-button>
    <aq-button>
      <aq-icon name="play"></aq-icon>
    </aq-button>
    <aq-button>
      <aq-icon name="forward"></aq-icon>
    </aq-button>
  </aq-button-group>
</div>

```html
<aq-button-group>
  <aq-button color="primary">Prev</aq-button>
  <aq-button color="primary">Next</aq-button>
</aq-button-group>

<aq-button-group>
  <aq-button>
    <aq-icon name="rewind"></aq-icon>
  </aq-button>
  <aq-button>
    <aq-icon name="play"></aq-icon>
  </aq-button>
  <aq-button>
    <aq-icon name="forward"></aq-icon>
  </aq-button>
</aq-button-group>
```

## Block Button

Block buttons extend the full available width.

<aq-button block color="primary">Block Button</aq-button>

```html
<aq-button block>Next</aq-button>
```

## Circle Button

If the inner button does not have same height and width size it will create a pill button, you can use this props to create icon button.

<div class="flex items-center">
  <aq-button circle color="primary mr-2">Pill Button</aq-button>

  <aq-button circle color="primary">
    <aq-icon name="pencil"></aq-icon>
  </aq-button>
</div>

```html
<aq-button circle color="primary">Pill Button</aq-button>
```

## Raised Button
add `aq-raised` props to make the button raise above the page.

<aq-button raised color="primary">Raised Button</aq-button>

```html
<aq-button raised color="primary">Raised Button</aq-button>
```

## Loading Button

Add `icon` props and set `loading` props to true to display the loading indicator.

If you need to disable the button when loading, you can add `disabled` attribute too.

<aq-button color="primary" icon :loading="true">Loading Button</aq-button>
<aq-button color="primary" icon :loading="true" disabled>Loading Button</aq-button>

```html
<aq-button color="primary" icon :loading="true">Loading Button</aq-button>
<aq-button color="primary" icon :loading="true" disabled>Loading Button</aq-button>
```