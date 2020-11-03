---
title: Notification
description: A pop up that appear at the main view site
group: components
order: 13
props:
  - option: title
    value: string
    default:
    desc: Notification title.
  - option: message
    value: string
    default:
    desc: Notification message.
  - option: icon
    value: string
    default:
    desc: Notification icon
  - option: timeout (ms)
    value: integer|boolean
    default: 5000
    desc: Notification visibility duration until disappears.
  - option: pos
    value: top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
    default: top-right
    desc: Notification position in the screen
---

## Basic Usage

Notification cannot be called using component tag, instead it call through `$aq.notification` function.
This `$aq` property will available when you include Aquarii in your Vue apps.
The only required props / params are `message`, or sometimes `title`

<example-notification :params="{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>

```javascript
//call this function from event handler like @click, @input or else
this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'
})
```

## With title

Simply add `title` params in the notification function.

<example-notification :params="{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.', title: 'Message From Jimmy Proton'}"></example-notification>

```javascript
this.$aq.notification({
  title: 'Message From Jimmy Proton',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
})
```

## Icons

You can add an icon from [Icon](/docs/icon) components using the icon components name.

<example-notification :params="{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.', title: 'Message From Jimmy Proton', icon: 'check-circle'}"></example-notification>

```javascript
this.$aq.notification({
  title: 'Message From Jimmy Proton',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  icon: 'check-circle'
})
```

## Timeout

Set the notification visibility using `timeout` props, set it to false if you want to deactivate the timeout ( manually close using X Button)

<div>
  <example-notification text="2000ms" :params="{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.', timeout: 2000, icon: 'check-circle'}"></example-notification>
  <example-notification text="Without Timeout" :params="{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.', timeout: false, icon: 'check-circle'}"></example-notification>
</div>

```javascript
this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  timeout: 2000
})

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  timeout: false
})
```

## Position

Change the notification position using `pos` props.

Available values:
- `top-left`
- `top-center`
- `top-right (default)`
- `bottom-left`
- `bottom-center`
- `bottom-right`

<div class="grid grid-cols-3 gap-4">
  <example-notification text="Top Left" :params="{pos: 'top-left', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
  <example-notification text="Top Center" :params="{pos: 'top-center', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
  <example-notification text="Top Right" :params="{pos: 'top-right', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
  <example-notification text="Bottom Left" :params="{pos: 'bottom-left', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
  <example-notification text="Bottom Center" :params="{pos: 'bottom-center', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
  <example-notification text="Bottom Right" :params="{pos: 'bottom-right', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}"></example-notification>
</div>

```javascript
this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'top-left'
});

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'top-center'
});

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'top-right'//default
});

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'bottom-left'
});

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'bottom-center'
});

this.$aq.notification({
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  pos: 'bottom-right'
});
```