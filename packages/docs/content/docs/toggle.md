---
title: Toggle
description: Switch your value through a toggle.
group: components
order: 15
props:
  - option: value
    value: boolean
    default: false
    desc:
  - option: onIcon | on-icon
    value: icon name
    default:
    desc: Icon to be add to the on state
  - option: offIcon | off-icon
    value: icon name
    default:
    desc: Icon to be add to the off state
  - option: color
    value: Aquarii Main Color | hex | rgb
    default:
    desc: Change the toggle color
---

## Simple Toggle

To use the toggle, simply add `aq-toggle` and also your `v-model` data

<example-toggle></example-toggle>

```html
<aq-toggle v-model="value" />
```

## With Icon

Use `on-icon` to change the on state icon and `off-icon` to change the off state icon.
you dont need to add both of the icon, you can add on, off or both.

<div class="flex">
  <example-toggle section="icon" class="mr-2"></example-toggle>
  <example-toggle section="icon-both"></example-toggle>
</div>

```html
<aq-toggle on-icon="check" v-model="value"/>
<aq-toggle off-icon="x" on-icon="check" v-model="value"/>
```

## Active Color

Change the toggle active color using `color` props,
you can use our available colors style or use RGB / HEX Color inside the `color` props.

<div class="grid grid-cols-5">
  <example-toggle color="danger" section="color"></example-toggle>
  <example-toggle color="warning" section="color"></example-toggle>
  <example-toggle color="success" section="color"></example-toggle>
  <example-toggle color="rgb(59,222,200)" section="color"></example-toggle>
  <example-toggle color="#000" section="color"></example-toggle>
</div>

```html
<aq-toggle color="danger"/>
<aq-toggle color="warning"/>
<aq-toggle color="success"/>
<aq-toggle color="rgb(59,222,200)"/>
<aq-toggle color="#000"/>
```