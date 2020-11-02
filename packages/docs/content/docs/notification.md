---
title: Notification
description: A pop up that appear at the main view site
group: components
props:
  - option: title
    value: string
    default:
    desc: Notification title
  - option: message
    value: string
    default:
    desc: Notification message
---

## Basic Usage

Notification cannot be called using component tag, instead it call through `$aq.notification` function.
This `$aq` property will available when you include Aquarii in your Vue apps.
The only required props / params are `message`, or sometimes `title`

<example-notification></example-notification>