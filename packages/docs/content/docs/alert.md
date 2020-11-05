---
title: Alert
description: Alert component for displaying a message
group: components
order: 3
props:
  - option: type
    value: success, warning, danger
    default:
    desc: Alert style
  - option: closeable
    value: boolean
    default:
    desc: Add a closeable button to alert component
---

## Basic Usage

Use `aq-alert` to apply the component, by default the alert background color is `gray`

<aq-alert>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</aq-alert>

```html
<aq-alert>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</aq-alert>
```

## Alert Style

Add `type` props to change the style of the alert.

<div class="grid grid-cols gap-2">
  <aq-alert type="success">
    <h2 class="text-green-800">Success Alert</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </aq-alert>

  <aq-alert type="warning">
    <h2 class="text-yellow-800">Warning Alert</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </aq-alert>

  <aq-alert type="danger">
    <h2 class="text-red-800">Danger Alert</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </aq-alert>
</div>

```html
<aq-alert type="success">
  <h2>Success Alert</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</aq-alert>

<aq-alert type="warning">
  <h2>Warning Alert</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</aq-alert>

<aq-alert type="danger">
  <h2">Danger Alert</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</aq-alert>
```

## Close Button

To add close button inside alert component, add `closeable` props and set to true.

<aq-alert type="success" :closeable="true">
  <h3>Successfully Login</h3>
</aq-alert>

```html
<aq-alert type="success" :closeable="true">
  <h3>Successfully Login</h3>
</aq-alert>
```