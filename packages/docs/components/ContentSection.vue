<template>
  <div class="relative px-4 sm:px-6 lg:px-8 py-4 content-section">
    <div class="mx-auto">
      <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{title}}</h1>

      <p class="text-md text-gray-500">{{desc}}</p>

      <hr class="my-4 border-b-2 border-gray-200">
    </div>

    <div class="markdown text-gray-500 mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>

<style lang="postcss" scoped>
  .content-section {
    @apply rounded;
    background-color: #f8faff;
    min-width: 70ch;
    max-width: 70ch;
  }

  .markdown p {
    @apply mb-4;
  }

  .markdown h1,
  .markdown h2,
  .markdown h3 {
    @apply mb-4;
  }

  .markdown h2 {
    @apply text-2xl;
  }

  .nuxt-content-highlight {
    @apply my-6;
  }

  p > code {
    @apply bg-red-100 px-1;
  }
</style>