<template>
  <aq-button @click="showAlert" type="primary">
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