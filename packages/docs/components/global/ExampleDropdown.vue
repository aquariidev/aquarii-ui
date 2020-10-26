<template>
  <aq-dropdown>
    <template #activator="{on}">
      <aq-button v-on="on" type="primary">Dropdown</aq-button>
    </template>
    <a href="#">Details</a>
    <a href="#">Edit</a>
  </aq-dropdown>
</template>

<script>
export default {

}
</script>