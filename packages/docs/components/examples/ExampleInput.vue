<template>
  <div>
    <aq-input v-model="name" placeholder="Name" />

    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>