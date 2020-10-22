<template>
  <div class="fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white">
      <nav class="mt-5 flex-1 pb-2 pt-12 bg-white">
        <div>
          <h3 class="headline">Getting Started</h3>

          <div class="mt-1 link-group">
            <nuxt-link to="/docs/introduction">
              Introduction
            </nuxt-link>

            <nuxt-link to="/docs/installation">
              Installation
            </nuxt-link>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="headline">Components</h3>

          <div class="mt-1 link-group">
            <nuxt-link to="/docs/button">
              Button
            </nuxt-link>

            <nuxt-link to="/docs/input">
              Input
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  async fetch() {
    const data = await this.$content('docs').fetch()
  }
}
</script>

<style lang="postcss" scoped>
  .headline {
    @apply px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider;
  }

  .link-group a {
    @apply flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-500 rounded-md transition ease-in-out duration-150 truncate;
  }

  .link-group a:hover, .link-group a.active {
    @apply text-gray-900 bg-gray-50;
  }

  .link-group a:focus {
    @apply outline-none;
  }

  .link-group a:not(:first-child) {
    @apply mt-1;
  }
</style>