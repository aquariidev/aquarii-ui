---
title: Tooltip
description: A Simple looking tooltip
group: components
order: 18
props:
  - option: value
    value: boolean
    default: undefined
    desc: Control The tooltip to be show or hide
  - option: pos
    value: top, left, bottom, right
    default: top
    desc: Position of the tooltip
  - option: title
    value: string
    default: undefined
    desc: Tooltip text if you dont use tooltip slot
---

## Basic Usage

To use tooltip simply add `aq-tooltip` and `title` props as the tooltip text.
The `default` slots of this component will serve as triggers to show or hide the tooltip.

<example-tooltip></example-tooltip>

```html
<aq-tooltip title="Hello Jimmy Electron">
  <aq-button color="primary">Hover</aq-button>
</aq-tooltip>
```

## Tooltip Position

You can change the position of tooltip from the trigger element using `pos` props.
The available position is left, right, top, and bottom.

<div class="grid grid-cols-4 gap-2">
  <example-tooltip section="position" position="left"></example-tooltip>
  <example-tooltip section="position" position="top"></example-tooltip>
  <example-tooltip section="position" position="bottom"></example-tooltip>
  <example-tooltip section="position" position="right"></example-tooltip>
</div>

```html
<aq-tooltip title="Hello Jimmy Electron" pos="left">
  <aq-button color="primary">Left Tooltip</aq-button>
</aq-tooltip>

<aq-tooltip title="Hello Jimmy Electron" pos="top">
  <aq-button color="primary">Top Tooltip</aq-button>
</aq-tooltip>

<aq-tooltip title="Hello Jimmy Electron" pos="bottom">
  <aq-button color="primary">Bottom Tooltip</aq-button>
</aq-tooltip>

<aq-tooltip title="Hello Jimmy Electron" pos="right">
  <aq-button color="primary">Right Tooltip</aq-button>
</aq-tooltip>
```