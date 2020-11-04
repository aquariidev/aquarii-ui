<template>
  <div class="my-4">
    <aq-table v-if="!section">
      <tr>
        <td>Table Data</td>
        <td>Table Data</td>
      </tr>
    </aq-table>

    <aq-table v-if="section === 'header'">
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

    <aq-card v-if="section === 'card'">
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

    <aq-card v-if="section === 'striped'">
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
  </div>
</template>

<script>
export default {
  props: ['section']
}
</script>