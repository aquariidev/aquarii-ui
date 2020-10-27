---
title: Forms
description: The form components include input, select, radio and many
order: 4
props:
  - option: label
    value: string
    default:
    desc: Add label to input component
  - option: filled
    value: any
    default:
    desc: Filled the input with gray background
---

## Input Style

<example-input placeholder="Standard Input"></example-input>

<aq-form-input placeholder="Filled Input" filled></aq-form-input>

```html
<aq-form-input v-model="name" />

<aq-form-input v-model="name" filled/>
```

You can also add any native html attributes in this component

<aq-form-input type="password" placeholder="Password Type"></aq-form-input>
<aq-form-input type="email" placeholder="Email Type"></aq-form-input>
<aq-form-input type="number" placeholder="Number Type"></aq-form-input>

```html
<aq-form-input type="password" placeholder="Password Type" />
<aq-form-input type="email" placeholder="Email Type" />
<aq-form-input type="number" placeholder="Number Type" />
```

## Label
<aq-form-input placeholder="First Name" label="First Name"></aq-form-input>

```html
<aq-form-input placeholder="First Name" label="First Name" />
```

## Input Message
<example-input section="message" ></example-input>

```html
<aq-form-input placeholder="Password" type="password">
  <template #message>
    Make your password short and easy to guess
  </template>
</aq-form-input>
```

## Input Group

You can append or prepend or both append and prepend using icon or text.

<example-input section="slot" placeholder="john_doe" slot-position="append"></example-input>

<example-input section="slot" placeholder="johndoe@gmail" slot-position="prepend"></example-input>

<example-input section="slot" placeholder="john-doe" slot-position="both"></example-input>

```html
<aq-form-input placeholder="john_doe">
  <template #append>
    @
  </template>
</aq-form-input>

<aq-form-input placeholder="john-doe">
  <template #append>
    https://
  </template>
  <template #prepend>
    .com
  </template>
</aq-form-input>

<aq-form-input placeholder="johndoe@gmail">
  <template #prepend>
    .com
  </template>
</aq-form-input>
```