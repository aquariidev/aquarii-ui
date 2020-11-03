<template>
  <div>
    <div v-if="section === 'native'">
      <aq-select v-model="value" :custom="false">
        <option value="Jimmy Proton">Jimmy Proton</option>
        <option value="Jimmy Neutron">Jimmy Neutron</option>
      </aq-select>

      {{value}}
    </div>

    <div v-if="section === 'custom'">
      <aq-select v-model="value" :custom="true" :options="arr" :searchable="false">
      </aq-select>
    </div>

    <div v-if="section === 'optionLabel'">
      <aq-select v-model="value" :searchable="false" :custom="true" :options="options" option-label="name" label="Jimmy Name">
      </aq-select>
    </div>

    <div v-if="section === 'search'">
      <aq-select v-model="value" :custom="true" :options="options" option-label="name" label="Jimmy Name">
      </aq-select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data() {
    return {
      value: 'Jimmy Proton',
      arr: [
        'Jimmy Proton',
        'Jimmy Neutron',
        'Jimmy Electron'
      ],
      options: [
        { name: 'Jimmy Neutron' },
        { name: 'Jimmy Proton' },
        { name: 'Jimmy Electron' },
      ]
    }
  }
}
</script>