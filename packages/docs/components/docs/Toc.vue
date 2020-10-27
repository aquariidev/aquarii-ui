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
          <NuxtLink :to="`#${link.id}`" class="toc-link">{{ link.text }}</NuxtLink>
        </li>

        <li class="mb-4" v-if="hasPropsOrSlots()">
          <NuxtLink to="#component-api" class="toc-link">
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

<style lang="postcss" scoped>
  .toc-link {
    @apply block font-medium text-gray-500 transition duration-150 ease-in-out transform;
  }

  .toc-link.active,
  .toc-link:hover {
    @apply text-gray-900;
  }

  .toc-link:hover {
    @apply translate-x-1;
  }
</style>