<template>
  <div>
    <div v-if="!section">
      <aq-toggle v-model="value"></aq-toggle>

      <span>{{value}}</span>
    </div>

    <aq-toggle on-icon="check" v-model="value" v-if="section === 'icon'" />

    <aq-toggle off-icon="x" on-icon="check" v-model="value" v-if="section === 'icon-both'" />

    <aq-toggle v-if="section === 'color'" :color="color" v-model="value"/>
  </div>
</template>

<script>
export default {
  props: ['section', 'color'],
  data() {
    return {
      value: true
    }
  }
}
</script>