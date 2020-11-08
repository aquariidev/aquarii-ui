<template>
  <div class="py-4">
    <div class="container px-4 mx-auto">
      <content-section :title="page.title" :desc="page.description">
        <nuxt-content :document="page" />

        <!-- Component API -->
        <component-api v-if="hasPropsOrSlots()" :page="page"></component-api>

        <div class="flex justify-between mt-8">
          <div>
            <nuxt-link v-if="prev" :to="{ name: 'docs-slug', params: { slug: prev.slug } }" class="flex items-center">
              <aq-icon name="arrow-left"/>
              {{ prev.title }}
            </nuxt-link>
          </div>

          <div>
            <nuxt-link v-if="next" :to="{ name: 'docs-slug', params: { slug: next.slug } }" class="flex items-center">
              {{ next.title }}

              <aq-icon name="arrow-right"/>
            </nuxt-link>
          </div>
        </div>
      </content-section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({params, $content}) {
    const page = await $content('docs', params.slug).fetch();

    const [prev, next] = await $content('docs')
      .only(['title', 'slug', 'order'])
      .sortBy('order', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      page,
      prev,
      next
    };
  },
  head() {
    return {
      title: `${this.page.title} - Aquarii`
    }
  },
  methods: {
    hasPropsOrSlots() {
      return (this.page.props && this.page.props.length) || (this.page.slots && this.page.slots.length);
    }
  }
}
</script>