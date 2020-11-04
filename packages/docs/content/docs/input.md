---
title: Input
description: Input component
group: components
order: 9
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

<aq-input placeholder="Filled Input" filled></aq-input>

```html
<aq-input v-model="name" />

<aq-input v-model="name" filled/>
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

## Input Message
<example-input section="message" ></example-input>

```html
<aq-input placeholder="Password" type="password">
  <template #message>
    Make your password short and easy to guess
  </template>
</aq-input>
```

## Input Group

You can append or prepend or both append and prepend using icon or text.

<example-input section="slot" placeholder="john_doe" slot-position="append"></example-input>

<example-input section="slot" placeholder="johndoe@gmail" slot-position="prepend"></example-input>

<example-input section="slot" placeholder="john-doe" slot-position="both"></example-input>

```html
<aq-input placeholder="john_doe">
  <template #append>
    @
  </template>
</aq-input>

<aq-input placeholder="john-doe">
  <template #append>
    https://
  </template>
  <template #prepend>
    .com
  </template>
</aq-input>

<aq-input placeholder="johndoe@gmail">
  <template #prepend>
    .com
  </template>
</aq-input>
```