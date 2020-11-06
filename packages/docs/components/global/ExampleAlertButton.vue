<template>
  <aq-button @click="showAlert" color="primary">
    <slot></slot>
  </aq-button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert('wow')
    }
  }
}
</script>