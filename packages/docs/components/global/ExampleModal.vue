<template>
  <div>
    <aq-modal v-if="!section">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
      </template>

      <p class="text-sm leading-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
      </p>
    </aq-modal>

    <aq-modal v-if="section === 'close-button'" :closeable="true" :bg-close="bgClose">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" type="primary">Open Modal</aq-button>
      </template>

      <div>
        <h2 class="text-center text-2xl">My Dialog Title</h2>
        <p class="text-sm leading-5 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
        </p>
      </div>
    </aq-modal>
  </div>
</template>

<script>
export default {
  props: ['section', 'bg-close'],
}
</script>