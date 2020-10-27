<template>
  <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6 pt-4">
    <div class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-16) pt-12 pb-4 -mt-12 top-16">
      <ul>
        <li
          v-for="link of doc.toc"
          :key="link.id"
          class="mb-4"
          :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`" class="block transition-fast hover:translate-r-2px hover:text-gray-900 font-medium text-gray-600">{{ link.text }}</NuxtLink>
        </li>

        <li class="mb-4" v-if="hasPropsOrSlots()">
          <NuxtLink to="#component-api" class="block transition-fast hover:translate-r-2px hover:text-gray-900 font-medium text-gray-600">
            API
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doc: {}
    }
  },
  async fetch() {
    this.doc = await this.$content('docs', this.$route.params.slug)
      .fetch()
  },
  watch: {
    '$route': '$fetch'
  },
  methods: {
    hasPropsOrSlots() {
      return (this.doc.props && this.doc.props.length) || (this.doc.slots && this.doc.slots.length);
    }
  }
}
</script>