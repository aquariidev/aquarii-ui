---
title: Select
description: Select menus can be used to select between choices in a form
order: 14
group: components
props:
  - option: value
    value: string|array|array-object|integer
    default:
    desc: The value of selected option
  - option: label
    value: string
    default:
    desc: Form Label
  - option: placeholder
    value: string
    default: Select Option
    desc: A Placeholder when value not selected / null
  - option: custom
    value: boolean
    default: true
    desc: Turn the select component into native or custom component
  - option: multiple
    value: boolean
    default: false
    desc: Add multiple select to the select input
  - option: options
    value: array
    default:
    desc: Options for the select component
  - option: option-label | optionLabel
    value: string
    default:
    desc: Label or name to put inside the option inner text, only available for array-object
  - option: track-by | trackBy
    value: string
    default:
    desc: The value that will be track for search and emit to value / v-model
  - option: closeOnSelect | close-on-select
    value: boolean
    default: true
    desc: Close option lists after option selected
  - option: searchable
    value: boolean
    default: true
    desc: Add or remove search input
---

## Basic Usage

<example-select section="custom"></example-select>

```vue
<template>
  <aq-select v-model="value"
    :options="options"
  />
</template>

<script>
export default {
  data() {
    return {
      value: 'Jimmy Proton',
      options: [
        'Jimmy Proton',
        'Jimmy Neutron',
        'Jimmy Electron'
      ]
    }
  }
}
</script>
```

## Option Label
If you have options with array-object / array containing object, you can use `option-label` props to determine the option inner text.

<div class="mb-4">
  <aq-alert type="warning">
    option-label and track-by are required if your options props contains array object
  </aq-alert>
</div>

<example-select section="optionLabel"></example-select>

```vue
<template>
  <aq-select v-model="value"
    :options="options"
    option-label="name" />
</template>

<script>
export default {
  data() {
    return {
      value: 'Jimmy Proton',
      options: [
        { name: 'Jimmy Neutron' },
        { name: 'Jimmy Proton' },
        { name: 'Jimmy Electron' },
      ]
    }
  }
}
</script>
```

## Search Options

By default the input are searchable, you can deactivate the search input by adding `searchable` props and set it to `false`.

<example-select section="search"></example-select>

<aq-alert type="warning">
  <p>The searchable props will search depend on the optionLabel props</p>
</aq-alert>

```html
<aq-select v-model="value"
  :options="options"
  :searchable="false"
/>
```

## Simple Native

If you just have a simple options without need to search or select multiple. you can use native html `select` by adding `custom` props and set it to `false`.

then you can add `v-model` to control the value.

<example-select section="native"></example-select>

```html
<aq-select v-model="value" :custom="false">
  <option value="Jimmy Proton">Jimmy Proton</option>
  <option value="Jimmy Neutron">Jimmy Neutron</option>
</aq-select>
```