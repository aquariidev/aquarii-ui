---
title: Table
description: A Simple tables
group: components
order: 15
props:
  - option: striped
    value: any
    default:
    desc: Display a striped table
slots:
  - name: thead
    default:
    desc: Table head
  - name: default
    default:
    desc: Usually insert your table body
---

## Basic Usage

To apply this component, use `aq-table`, optionally you can add `thead` slot in the table to apply `thead` component.
There are no custom components for `tr` and `td`, so you can do that yourself. `default` slots will serve as `tbody`.

here is example table without `thead` or header.

<example-table></example-table>

```html
<aq-table>
  <tr>
    <td>Table Data</td>
    <td>Table Data</td>
  </tr>
</aq-table>
```

## Table with Header / Heading

Inserting a header is the same as inserting table body, the only different is header is in the `thead` slots.

<example-table section="header"></example-table>

```html
<aq-table>
  <template #thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
  </template>

  <tr>
    <td>Table Data</td>
    <td>Table Data</td>
  </tr>
</aq-table>
```

## Combine with Card Component

All component from Aquarii component almost combineable,
for better styling the table, you can add `aq-card` component as `parent` component in table component.

<example-table section="card"></example-table>

```html
<aq-card>
  <aq-table>
    <template #thead>
      <tr>
        <th>Table Heading</th>
        <th>Table Heading</th>
      </tr>
    </template>

    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>

    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
  </aq-table>
</aq-card>
```

## Striped Table

Add an empty `striped` props to display a striped table.

<example-table section="striped"></example-table>

```html
<aq-card>
  <aq-table striped>
    <template #thead>
      <tr>
        <th>Table Heading</th>
        <th>Table Heading</th>
      </tr>
    </template>

    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>

    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
  </aq-table>
</aq-card>
```