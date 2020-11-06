<template>
  <div>
    <aq-modal v-if="!section">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">Open Modal</aq-button>
      </template>

      <aq-card body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
      </aq-card>
    </aq-modal>

    <aq-modal v-if="section === 'close-button'" :closeable="true" :bg-close="bgClose">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">Open Modal</aq-button>
      </template>

      <aq-card>
        <h2 class="text-center text-2xl" slot="header">My Dialog Title</h2>
        <p class="text-sm leading-5 text-gray-500" slot="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
        </p>
      </aq-card>
    </aq-modal>

    <aq-modal v-if="section === 'full'" full :closeable="true">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">Open Modal</aq-button>
      </template>

      <aq-card squared>
        <h2 class="text-center text-2xl" slot="header">My Dialog Title</h2>
        <p class="text-sm leading-5 text-gray-500" slot="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
        </p>
      </aq-card>
    </aq-modal>

    <aq-modal v-if="section === 'overflow'">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">Open Modal</aq-button>
      </template>

      <aq-card body>
        <p v-for="n in 6" :key="n" class="my-4">
          {{longText}}
        </p>
      </aq-card>
    </aq-modal>

    <div v-if="section === 'no-activator'" >
      <aq-button color="primary" @click.stop="isOpen = true">Open Modal</aq-button>

      <aq-modal v-model="isOpen">
        <aq-card body>
          <p class="text-sm leading-5 text-gray-500" slot="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
          </p>
        </aq-card>
      </aq-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'bg-close'],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    longText() {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  }
}
</script>