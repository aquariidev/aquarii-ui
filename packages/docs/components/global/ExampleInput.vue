<template>
  <!-- Default -->
  <div>
    <div v-if="!section">
      <aq-form-input v-model="name" :placeholder="placeholder" />

      <span>{{name}}</span>
    </div>

    <aq-form-input :placeholder="placeholder" v-if="section === 'slot'">
      <template #append v-if="slotPosition == 'append' || slotPosition == 'both'">
        {{slotPosition == 'both' ? 'https://' : '@'}}
      </template>

      <template #prepend v-if="slotPosition == 'prepend' || slotPosition == 'both'">
        .com
      </template>
    </aq-form-input>

    <aq-form-input placeholder="Password" type="password" v-if="section === 'message'">
      <template #message>
        Make your password short and easy to guess
      </template>
    </aq-form-input>
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