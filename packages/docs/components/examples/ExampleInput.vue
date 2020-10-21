<template>
  <!-- Default -->
  <div>
    <div v-if="!section">
      <aq-input v-model="name" placeholder="Name" />

      <span>{{name}}</span>
    </div>

    <aq-input placeholder="Website" v-if="section === 'slot'">
      <template #append>
        https://
      </template>
    </aq-input>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data() {
    return {
      name: '',
    }
  }
}
</script>