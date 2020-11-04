<template>
  <div>
    <div v-if="!section">
      <aq-toggle v-model="value"></aq-toggle>

      <span>{{value}}</span>
    </div>

    <aq-toggle on-icon="check" v-model="value" v-if="section === 'icon'"></aq-toggle>

    <aq-toggle off-icon="x" on-icon="check" v-model="value" v-if="section === 'icon-both'"></aq-toggle>

    <aq-toggle small v-model="value" v-if="section === 'small'"></aq-toggle>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data() {
    return {
      value: true
    }
  }
}
</script>