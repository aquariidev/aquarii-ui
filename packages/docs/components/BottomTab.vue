<template>
  <nav class="aq__bottom-tab block lg:hidden">
    <div class="aq-tab-content mb-2 rounded-md shadow-lg">
      <nuxt-link to="/docs">
        <aq-icon name="document-report"></aq-icon>
        <span>Docs</span>
      </nuxt-link>

      <nuxt-link to="/examples">
        <aq-icon name="code"></aq-icon>
        <span>Examples</span>
      </nuxt-link>

      <nuxt-link to="/" exact>
        <aq-icon name="home"></aq-icon>
        <span>Home</span>
      </nuxt-link>

      <nuxt-link to="/changelog">
        <aq-icon name="document-report"></aq-icon>
        <span>Changelog</span>
      </nuxt-link>

      <nuxt-link to="/demo">
        <aq-icon name="cube"></aq-icon>
        <span>Demo</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
  .aq__bottom-tab {
    @apply w-full fixed bottom-0 px-4;
  }

  .aq-tab-content {
    @apply bg-white flex border;
  }

  .aq__bottom-tab a {
    @apply p-2 text-xs font-medium text-gray-500 block text-center w-full;
  }

  .aq__bottom-tab a:hover,
  .aq__bottom-tab a.active {
    @apply text-indigo-700;
  }

  .aq__bottom-tab a svg {
    @apply inline-block mb-1;
  }

  .aq__bottom-tab a span {
    @apply block;
  }
</style>