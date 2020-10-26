---
title: Card
description: Create layout boxes with different styles
order: 5
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
You can add `body` slot inside the card component or add `body` props from card component itself.

<aq-card body>
  <h1>Card Title</h1>
</aq-card>