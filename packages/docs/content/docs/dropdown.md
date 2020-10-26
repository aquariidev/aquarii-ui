---
title: Dropdown
description: Component to display a lists of links and more
order: 6
---

Remember to put the element that activates the menu in the activator slot.

<example-dropdown></example-dropdown>

```html
<aq-dropdown>
  <template #activator="{on}">
    <aq-button v-on="on" type="primary">Dropdown</aq-button>
  </template>
  <a href="#">Details</a>
  <a href="#">Edit</a>
</aq-dropdown>
```

you are freely to change the **anchor** tag using vue router link or nuxt link

<example-dropdown></example-dropdown>