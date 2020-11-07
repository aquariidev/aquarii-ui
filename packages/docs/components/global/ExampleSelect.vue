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
      <aq-select v-model="custom" :options="arr" :searchable="true">
      </aq-select>
    </div>

    <div v-if="section === 'optionLabel'">
      <aq-select v-model="custom" track-by="name" :searchable="false" :options="options" option-label="name" label="Jimmy Name">
      </aq-select>
    </div>

    <div v-if="section === 'search'">
      <aq-select v-model="value" :options="options" track-by="name" :searchable="false" option-label="name" label="Jimmy Name">
      </aq-select>
    </div>

    <div v-if="section === 'multiple'">
      <aq-select v-model="values" :options="options" track-by="name" :multiple="true" option-label="name" label="Jimmy Name">
      </aq-select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data() {
    return {
      custom: null,
      value: 'Jimmy Proton',
      values: null,
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