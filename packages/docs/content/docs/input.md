---
title: Input
description: Input are the core of every project
order: 4
---

## Basic Input
<example-input></example-input>

```html
<aq-input v-model="name" />
```

You can also add any native html attributes in this component

<aq-input type="password" placeholder="Password Type"></aq-input>
<aq-input type="email" placeholder="Email Type"></aq-input>
<aq-input type="number" placeholder="Number Type"></aq-input>

```html
<aq-input type="password" placeholder="Password Type" />
<aq-input type="email" placeholder="Email Type" />
<aq-input type="number" placeholder="Number Type" />
```

## Label
<aq-input placeholder="First Name" label="First Name"></aq-input>

```html
<aq-input placeholder="First Name" label="First Name" />
```

## Input Group

You can append or prepend or both append and prepend using icon or text.

<example-input section="slot"></example-input>

```html
<aq-input placeholder="Website">
  <template #append>
    https://
  </template>
</aq-input>
```