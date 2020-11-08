---
title: Toggle
description: Switch your value through a toggle.
group: components
order: 15
props:
  - option: onIcon | on-icon
    value: icon name
    default:
    desc: Icon to be add to the on state
  - option: offIcon | off-icon
    value: icon name
    default:
    desc: Icon to be add to the off state
---

## Simple Toggle

To use the toggle, simply add `aq-toggle` and also your `v-model` data

<example-toggle></example-toggle>

```html
<aq-toggle v-model="value" />
```

## With Icon

use `on-icon` to change the on state icon and `off-icon` to change the off state icon.
you dont need to add both of the icon, you can add on, off or both.

<div class="flex">
  <example-toggle section="icon" class="mr-2"></example-toggle>
  <example-toggle section="icon-both"></example-toggle>
</div>

```html
<aq-toggle on-icon="check" v-model="value"/>
<aq-toggle off-icon="x" on-icon="check" v-model="value"/>
```