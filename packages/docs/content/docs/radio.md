---
title: Radio
group: components
order: 17
props:
  - option: value
    value: any
    default:
    desc: The value of the radio
  - option: label
    value: any
    default:
    desc: Add label to the radio
  - option: id
    value: any
    default:
    desc: The unique id of each radio
---

## Basic Usage

use `aq-radio` to create a radio button, we recommended for you to use `aq-radio-group`,
you can use `v-model` in `aq-radio-group` to access the value inside the group.

<example-radio></example-radio>

<div class="my-4">
  <aq-alert type="warning">
    <p>Dont forget to add <b>name</b> props / attribute in <b>aq-radio-group</b>
  </aq-alert>
</div>

```html
<aq-radio-group v-model="value" name="anything">
  <aq-radio value="one" />
  <aq-radio value="two" />
</aq-radio-group>
```

## With Label

Add `label` props inside the `aq-radio` component.

<example-radio section="label"></example-radio>

```html
<aq-radio-group v-model="value" name="radio">
  <aq-radio value="radio1" label="One" />
  <aq-radio value="radio2" label="two" />
</aq-radio-group>
```

To make the label work when clicked, we use the radio value as `id` for input, and `for` for label,
If you want to change the id with yours you can add `id` props to `aq-radio`.

```html
<aq-radio value="radio2" label="two" id="someuniqueid" />
```