<template>
  <div>
    <aq-radio-group v-model="value" name="anything" v-if="!section">
      <aq-radio value="one"></aq-radio>
      <aq-radio value="two"></aq-radio>
    </aq-radio-group>

    <aq-radio-group v-model="value" name="radio" v-if="section === 'label'">
      <aq-radio value="radio1" id="unique1" label="One"></aq-radio>
      <aq-radio value="radio2" id="unique2" label="two"></aq-radio>
    </aq-radio-group>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data() {
    return {
      value: 'one'
    }
  }
}
</script>