---
title: Input
description: Input component
group: components
order: 9
props:
  - option: label
    value: string
    default: undefined
    desc: Add label to input component
  - option: filled
    value: any
    default: undefined
    desc: Filled the input with gray background
  - option: inline-append | inlineAppend
    value: boolean
    default: false
    desc: Make append add on to be inline with input
  - option: inline-prepend | inlinePrepend
    value: boolean
    default: false
    desc: Make prepend add on to be inline with input
slots:
  - name: append
    default:
    desc: Append input element
  - name: prepend
    default:
    desc: Prepend input element
  - name: message
    default:
    desc: Default input message
  - name: message-error
    default:
    desc: Error input message
---

## Input Style

<example-input placeholder="Standard Input"></example-input>

<aq-card body>
  <aq-input placeholder="Filled Input" filled></aq-input>
</aq-card>

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

<example-input section="group" placeholder="jimmy_proton" slot-position="append"></example-input>
<example-input section="group" placeholder="jimmy_proton@gmail" slot-position="prepend"></example-input>
<example-input section="group" placeholder="jimmy-proton" slot-position="both"></example-input>

```html
<aq-input placeholder="jimmy_proton">
  <template #append>
    <aq-icon name="user"></aq-icon>
  </template>
</aq-input>

<aq-input placeholder="jimmy-proton">
  <template #append>
    https://
  </template>
  <template #prepend>
    .com
  </template>
</aq-input>

<aq-input placeholder="jimmy_proton@gmail">
  <template #prepend>
    .com
  </template>
</aq-input>
```

## Inline Input Group

Inline group will append or prepend content inside the input. To activate the inline group, you can set `inline-append` or/and `inline-prepend` props to true.

it also can mix with input group.

<example-input section="inline-group" placeholder="0"></example-input>

```html
<aq-input :append-inline="true">
  <template #append>
    $
  </template>
</aq-input>

<aq-input :append-inline="true">
  <template #append>
    $
  </template>

  <template #prepend>
    USD
  </template>
</aq-input>

<aq-input :append-inline="true" :prepend-inline="true">
  <template #append>
    $
  </template>

  <template #prepend>
    USD
  </template>
</aq-input>
```