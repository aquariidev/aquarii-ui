---
title: Card
description: Create layout boxes with different styles
group: components
order: 6
props:
  - option: body
    value: any
    default:
    desc: Add padding inside the card base component
  - option: raised
    value:
    default:
    desc: Raise the card above the page
  - option: squared
    value: any
    default:
    desc: Remove the rounded corner of card
slots:
  - name: header
    default:
    desc: Card header contain padding and border bottom
  - name: default
    default:
    desc: The default slots, usually use to create a media image
  - name: body
    default:
    desc: Card body contain padding
  - name: footer
    default:
    desc: Card footer contain padding and border top
---

## Default Card
By default, card component will only add shadow and white background,
you can add title, paragraph or any component to modify the card.

<aq-card>
  <h1>Card Title</h1>
</aq-card>

```html
<aq-card>
  <h1>Card Title</h1>
</aq-card>
```

## Card Body
Add `body` slot inside the card component or add `body` props from card component itself.

<aq-card body>
  <h1>Title in Body</h1>
</aq-card>

```html
<aq-card body>
  <h1>Title in Body</h1>
</aq-card>

<aq-card>
  <template #body>
    <h1>Title in Body</h1>
  </template>
</aq-card>
```

## Card Header and Footer
Divide a card into header and footer, add `header` and/or `footer` slot to card component.

<example-card section="header-footer"></example-card>

```html
<aq-card>
  <template #header>
    <h1>Card Header</h1>
  </template>

  <template #body>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, labore nulla fugit ipsum doloremque
      nesciunt voluptas modi sapiente sequi distinctio culpa voluptatem dolores? Magni, magnam. Omnis dolores commodi
      porro.</p>
  </template>

  <template #footer>
    <aq-button color="primary">Details</aq-button>
    <aq-button>Preview</aq-button>
  </template>
</aq-card>
```

## Card Media
To display an image without padding, you can use `aq-card-media` inside card component,
it will append to the default slot of `aq-card` component.

<example-card section="media"></example-card>

```html
<aq-card>
  <aq-card-media>
    <img src="https://picsum.photos/seed/picsum/600/400" alt="Card Media">
  </aq-card-media>

  <template #body>
    <p>lorem</p>
  </template>
</aq-card>
```

## Raised Card
You can format the card to raise above the page.

<div class="grid lg:grid-cols-2 gap-2">
  <example-card section="raised"></example-card>
  <example-card section="raised"></example-card>
</div>

```html
<aq-card raised>
  <aq-card-media>
    <img src="/img" alt="Card Media">
  </aq-card-media>

  <template #body>
    <p>lorem</p>
  </template>
</aq-card>
```