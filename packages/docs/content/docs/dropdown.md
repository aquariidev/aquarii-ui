---
title: Dropdown
description: Component to display a lists of links and more
order: 6
options:
  - option: pos
    value: string
    default:
    desc: The position of dropdown nav will open from its activator position
---

## Basic Usage

Remember to put the element that activates the menu in the activator slot.

<example-dropdown></example-dropdown>

```html
<aq-dropdown>
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Dropdown</aq-button>
  </template>
  <a href="#" role="menu">Details</a>
  <a href="#" role="menu">Edit</a>
</aq-dropdown>
```

you are freely to change the **anchor** tag using vue router link or nuxt link

## With Icons
You can add icon from [Icon Component](/docs/icon)


<example-dropdown type="icon"></example-dropdown>

```html
<aq-dropdown>
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" icon>
      <aq-icon name="dot-vertical"></aq-icon>
    </aq-button>
  </template>
  <a href="#" role="menu">
    <aq-icon name="exclamation-circle"/>
    Detail
  </a>
  <a href="#" role="menu">
    <aq-icon name="pencil"/>
    Edit
  </a>
</aq-dropdown>
```

## With Dividers

Add horizontal rule with class `.aq-divider` between nav links to add divider

<example-dropdown type="icon" divider="true"></example-dropdown>