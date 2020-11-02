<template>
  <aq-button type="primary" @click="open(params)" v-if="!section">{{text || 'Notification'}}</aq-button>
</template>

<script>
export default {
  props: ['section', 'params', 'text'],
  methods: {
    open(params) {
      this.$aq.notification(params)
    }
  }
}
</script>