---
title: Modal
description: A component that block interactions with the main view.
group: components
---

## Basic Usage
As same as [Dropdown](/docs/dropdown) Component, modal need `activator` like button to activate the modal.

<example-modal></example-modal>

```html
<aq-modal>
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
  </p>
</aq-modal>
```