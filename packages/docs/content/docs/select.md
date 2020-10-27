---
title: Select
description: Select menus can be used to select between choices in a form
order: 8
props:
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
    default: false
    desc: Turn select into custom input instead native
  - option: multiple
    value: boolean
    default: false
    desc: Add multiple select to the select input
  - option: options
    value: array
    default:
    desc: Options for the select component
  - option: optionLabel | option-label
    value: string
    default: from option value
    desc: Label or name to put inside the option inner text, only available for array-object
  - option: closeOnSelect | close-on-select
    value: boolean
    default: true
    desc: Close option lists after option selected
---

## Simple Native

<example-select section="native"></example-select>

```html
<aq-select v-model="value">
  <option value="Jimmy Proton">Jimmy Proton</option>
  <option value="Jimmy Neutron">Jimmy Neutron</option>
</aq-select>
```

## Simple Custom
Add `custom` props with `true` value to activate custom select, and add `options` props for the options list, it could be array or array-object.

<example-select section="custom"></example-select>

### Full Example

```vue
<template>
  <aq-select v-model="value"
    :custom="true"
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

If you have options with array-object / array containing object, you can use `optionLabel` props to determine the option inner text.

`optionLabel` are required if your options props contains array object

<example-select section="optionLabel"></example-select>

```vue
<template>
  <aq-select v-model="value"
    :custom="true"
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