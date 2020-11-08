---
title: Modal
description: A component that block interactions with the main view.
group: components
order: 12
props:
  - option: value
    value: any
    default:
    desc: Value to control the modal to be show or hide
  - option: closeable
    value: boolean
    default:
    desc: Add close button to the modal
  - option: bgClose | bg-close
    value: boolean
    default: false
    desc: Choose to dismiss the modal when clicking the overlay background
  - option: full
    value: any
    default:
    desc: Make the modal fill the entire page
slots:
  - name: activator
    default:
    desc: Element to activate the modal
---

## Basic Usage

As same as [Dropdown](/docs/dropdown) Component, modal need `activator` like button to activate the modal.

<example-modal></example-modal>

```html
<aq-modal>
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <aq-card body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
  </aq-card>
</aq-modal>
```

## Close Button

You can add close button to the modal dialog by adding `closeable` to `true`.

<example-modal section="close-button"></example-modal>

```html
<aq-modal :closeable="true">
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <aq-card>
    <h2 class="text-center text-2xl" slot="header">My Dialog Title</h2>
    <p class="text-sm leading-5 text-gray-500" slot="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </aq-card>
</aq-modal>
```

## Background Close

By default background close are activate, when clicking outside the dialog it will automatically close the modal,
to prevent this action you can turn it off by setting `bg-close` to `false`

<example-modal section="close-button" :bg-close="false"></example-modal>

```html
<aq-modal :closeable="true" :bg-close="true">
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <aq-card>
    <h2 class="text-center text-2xl" slot="header">My Dialog Title</h2>
    <p class="text-sm leading-5 text-gray-500" slot="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </aq-card>
</aq-modal>
```

## Full Screen Modal

Add `full` props to fills the modal to entire page.

<example-modal section="full"></example-modal>

```html
<aq-modal full :closeable="true">
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <aq-card squared>
    <h2 class="text-center text-2xl" slot="header">My Dialog Title</h2>
    <p class="text-sm leading-5 text-gray-500" slot="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </aq-card>
</aq-modal>
```

## Overflow Modal

By default The dialog content will scroll if its content exceeds the window height.

<div class="my-4">
  <example-modal section="overflow"></example-modal>
</div>

## Without Activator

Instead using `activator` to activate the modal, you can also use `v-model` inside `aq-modal` component.
This model can replace the `activator` functionality.

But to prevent the modal blink or dissapeared, add `.stop` modifier to the component that triggers the modal.

<example-modal section="no-activator"></example-modal>

```html
<aq-button color="primary" @click.stop="isOpen = true">Open Modal</aq-button>

<aq-modal v-model="isOpen">
  <aq-card body>
    <p class="text-sm leading-5 text-gray-500" slot="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </aq-card>
</aq-modal>
```