<template>
  <div>
    <aq-button @click="show" type="primary">Toggle</aq-button>
    <transition name="aq-modal">
      <div class="aq-modal" v-show="showModal">
        <transition
            @before-leave="cardLeaving = true"
            @after-leave="cardLeaving = false"
            name="aq-modal-dialog"
          >
            <div v-show="showContent" class="dialog" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <!-- Heroicon name: check -->
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Payment successful
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm leading-5 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <span class="flex w-full rounded-md shadow-sm">
                  <button @click="close" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    Go back to dashboard
                  </button>
                </span>
              </div>
            </div>
          </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['open'],
  data() {
    return {
      showModal: false,
      showContent: false,
      cardLeaving: false,
    }
  },
  watch: {
    open: {
      handler: function (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving(newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  computed: {
    leaving() {
      return this.cardLeaving;
    }
  },
  methods: {
    show() {
      this.showModal = true
      this.showContent = true
    },
    close() {
      this.showContent = false
    }
  }
}
</script>