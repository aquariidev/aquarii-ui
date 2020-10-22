<template>
  <!-- Default -->
  <div>
    <div v-if="!section">
      <aq-input v-model="name" :placeholder="placeholder" />

      <span>{{name}}</span>
    </div>

    <aq-input :placeholder="placeholder" v-if="section === 'slot'">
      <template #append v-if="slotPosition == 'append' || slotPosition == 'both'">
        {{slotPosition == 'both' ? 'https://' : '@'}}
      </template>

      <template #prepend v-if="slotPosition == 'prepend' || slotPosition == 'both'">
        .com
      </template>
    </aq-input>
  </div>
</template>

<script>
export default {
  props: ['section', 'slotPosition', 'placeholder'],
  data() {
    return {
      name: '',
    }
  }
}
</script>