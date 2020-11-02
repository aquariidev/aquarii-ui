<template>
  <div>
    <aq-button type="primary" @click="open" v-if="!section">Notification</aq-button>
  </div>
</template>

<script>
export default {
  props: ['section'],
  methods: {
    open() {
      this.$aq.notification({message: 'Notification without message'})
    }
  }
}
</script>