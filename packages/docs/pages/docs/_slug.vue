<template>
  <div class="py-4">
    <div class="container px-4 mx-auto">
      <content-section :title="page.title" :desc="page.description">
        <nuxt-content :document="page" />
      </content-section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({params, $content}) {
    const page = await $content('docs', params.slug).fetch();

    return {
      page
    }
  }
}
</script>