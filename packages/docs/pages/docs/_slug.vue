<template>
  <div class="py-4">
    <div class="container px-4 mx-auto">
      <content-section :title="page.title" :desc="page.description">
        <nuxt-content :document="page" />

        <!-- Component API -->
        <div v-if="hasPropsOrSlots()">
          <h2 id="component-api" class="my-4">API</h2>

          <aq-card class="mt-4">
            <h3 slot="header">Props</h3>

            <aq-card-media class="overflow-auto">
              <aq-table>
                <template #thead>
                  <tr>
                    <th>Option</th>
                    <th>Value</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </template>

                <tr v-for="prop in page.props" :key="prop.option">
                  <td>{{prop.option}}</td>
                  <td>{{prop.value}}</td>
                  <td>{{prop.default}}</td>
                  <td>{{prop.desc}}</td>
                </tr>
              </aq-table>
            </aq-card-media>
          </aq-card>


          <aq-card class="mt-4" v-if="page.slots">
            <h3 slot="header">Slots</h3>

            <aq-card-media class="overflow-auto">
              <aq-table>
                <template #thead>
                  <tr>
                    <th>Name</th>
                    <th>Values</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </template>

                <tr v-for="prop in page.slots" :key="prop.name">
                  <td>{{slot.name}}</td>
                  <td></td>
                </tr>
              </aq-table>
            </aq-card-media>
          </aq-card>
        </div>

        <div class="flex justify-between mt-8">
          <div>
            <nuxt-link v-if="prev" :to="{ name: 'docs-slug', params: { slug: prev.slug } }" class="flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              {{ prev.title }}
            </nuxt-link>
          </div>

          <div>
            <nuxt-link v-if="next" :to="{ name: 'docs-slug', params: { slug: next.slug } }" class="flex items-center">
              {{ next.title }}

              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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