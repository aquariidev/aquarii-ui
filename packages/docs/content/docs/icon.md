---
title: Icon
description: Icon packages from heroicons
group: components
order: 7
props:
  - option: name
    value: string
    default:
    desc: Icon name
---

Aquarii icon includes a complete port of [Heroicons](https://heroicons.dev)

## Basic Usage
`aq-icon` contain `name` props to load the name of the icon from heroicons, we use the same name as the one in heroicons.

for example in heroicons there is an icon called `exclamation-circle`, you can simply pass the props using this name

<aq-icon name="exclamation-circle"></aq-icon>

```html
<aq-icon name="exclamation-circle" />
```