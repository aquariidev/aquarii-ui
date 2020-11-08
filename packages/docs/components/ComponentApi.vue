<template>
  <div>
    <h2 id="component-api" class="my-4">API</h2>

    <aq-card class="mt-4" v-if="page.props">
      <h3 slot="header">Props</h3>

      <aq-card-media class="overflow-auto">
        <aq-table>
          <template #thead>
            <tr>
              <th>Option</th>
              <th>Value</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </template>

          <tr v-for="prop in page.props" :key="prop.option">
            <td>{{prop.option}}</td>
            <td>{{prop.value}}</td>
            <td>{{prop.default}}</td>
            <td>{{prop.desc}}</td>
          </tr>
        </aq-table>
      </aq-card-media>
    </aq-card>


    <aq-card class="mt-4" v-if="page.slots">
      <h3 slot="header">Slots</h3>

      <aq-card-media class="overflow-auto">
        <aq-table>
          <template #thead>
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </template>

          <tr v-for="slot in page.slots" :key="slot.name">
            <td>{{slot.name}}</td>
            <td>{{slot.default}}</td>
            <td>{{slot.desc}}</td>
          </tr>
        </aq-table>
      </aq-card-media>
    </aq-card>
  </div>
</template>

<script>
export default {
  props: ['page']
}
</script>