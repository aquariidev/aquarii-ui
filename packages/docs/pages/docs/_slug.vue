<template>
  <content-section :title="page.title" :description="page.description">
    <nuxt-content :document="page"/>
  </content-section>
</template>

<script>

export default {
  head() {
    return {
      title: this.page.title
    }
  },
  async asyncData({params, $content}) {
    const page = await $content('docs', params.slug).fetch()

    return { page }
  }
}
</script>