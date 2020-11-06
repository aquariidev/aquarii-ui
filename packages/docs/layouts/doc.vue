<template>
  <div class="antialiased">
    <navbar></navbar>
    <div class="w-full container mx-auto">
      <div class="flex">
        <sidebar></sidebar>

        <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          <div class="w-full pt-24 lg:pt-28 bg-white flex">
            <main class="w-full">
              <nuxt/>
              <Footer/>
            </main>

            <Toc/>
          </div>
        </div>
      </div>
    </div>
    <BottomTab/>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
}
</script>

<style>
  code[class*="language-"], pre[class*="language-"] {
    background: #253040;
  }
</style>