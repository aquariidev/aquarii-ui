---
title: Modal
description: A component that block interactions with the main view.
group: components
props:
  - option: closeable
    value: boolean
    default:
    desc: Add close button to the modal
  - option: bgClose | bg-close
    value: boolean
    default: false
    desc: Choose to dismiss the modal when clicking the overlay background
slots:
  - name: activator
    value: html element | aquarii component | vue component
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

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
  </p>
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

  <div class="your-margin-top-class">
    <h2>My Dialog Title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </div>
</aq-modal>
```

<aq-alert type="warning">
  make sure to add some padding/margin inside your dialog content, we don't provide it yet.
</aq-alert>

## Background Close

By default background close are activate, when clicking outside the dialog it will automatically close the modal,
to prevent this action you can turn it off by setting `bg-close` to `false`

<example-modal section="close-button" :bg-close="false"></example-modal>

```html
<aq-modal :closeable="true" :bg-close="true">
  <template #activator="{on, attrs}">
    <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
  </template>

  <div class="your-margin-top-class">
    <h2>My Dialog Title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
    </p>
  </div>
</aq-modal>
```