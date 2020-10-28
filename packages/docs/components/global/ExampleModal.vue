<template>
  <div>
    <aq-modal>
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
      </template>

      <p class="text-sm leading-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
      </p>
    </aq-modal>
  </div>
</template>

<script>
export default {

}
</script>