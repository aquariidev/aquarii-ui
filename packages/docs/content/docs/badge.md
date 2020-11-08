---
title: Badge
description: A component that usually use for notification, tag and more.
group: components
order: 4
props:
  - option: type
    value: success, warning, danger
    default:
    desc: Badge style
  - option: large
    value: any
    default:
    desc: Large badge
  - option: rounded
    value: any
    default:
    desc: Rounded badge
  - option: closeable
    value: boolean
    default:
    desc: Add a closeable button to badge component
events:
  - name: "@x-click"
    attr:
    desc: Emitted When close button clicked
---

## Basic Usage

To add a badge, use `aq-badge`.

<aq-card body>
  <aq-badge>1</aq-badge>
  <aq-badge>Badge</aq-badge>
</aq-card>

```html
<aq-badge>1</aq-badge>
<aq-badge>Badge</aq-badge>
```

## Style Modifiers

Specify the badge color by adding `type` props.

Available values:
- `success`
- `primary`
- `warning`
- `danger`

<aq-card body>
  <aq-badge>Default</aq-badge>
  <aq-badge type="primary">Primary</aq-badge>
  <aq-badge type="success">Success</aq-badge>
  <aq-badge type="warning">Warning</aq-badge>
  <aq-badge type="danger">Danger</aq-badge>
</aq-card>

```html
<aq-badge>Default</aq-badge>
<aq-badge type="primary">Primary</aq-badge>
<aq-badge type="success">Success</aq-badge>
<aq-badge type="warning">Warning</aq-badge>
<aq-badge type="danger">Danger</aq-badge>
```

## Large Badge

Add `large` props to make the badge large.

<aq-card body>
  <aq-badge large>Large Badge</aq-badge>
  <aq-badge large>1</aq-badge>
</aq-card>

```html
<aq-badge large>Large Badge</aq-badge>
<aq-badge large>1</aq-badge>
```

## Rounded Badge

By default badge border radius are circle/pill, add `rounded` props to turn the badge into rounded.

<aq-card body>
  <aq-badge rounded>Rounded Badge</aq-badge>
  <aq-badge large rounded>Large Rounded Badge</aq-badge>
</aq-card>

```html
<aq-badge rounded>Rounded Badge</aq-badge>
<aq-badge large rounded>Large Rounded Badge</aq-badge>
```

## Closeable Badge

Add `closeable` props and set to `true` to destroy / remove the badge.

And to handle the closeable event ( when you click the x button), use `@x-click` events inside the badge component.

<aq-card body>
  <example-badge></example-badge>
</aq-card>

```vue
<template>
  <aq-badge @x-click="remove(badge)" v-for="badge in badges" :key="badge" :closeable="true">
    {{badge}}
  </aq-badge>
</template>

<script>
export default {
  data() {
    return {
      badges: ['Javascript', 'Vue', 'Nuxt']
    }
  },
  methods: {
    remove(badge) {
      this.badges = this.badges.filter(data => data !== badge);
    }
  }
}
</script>
```