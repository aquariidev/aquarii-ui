---
title: Button
description: Button are the core of every project
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
<aq-button>Standard Button</aq-button>
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

<aq-button-group>
  <aq-button>Standard Button</aq-button>
  <aq-button>Standard Button</aq-button>
</aq-button-group>