<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <sidebar></sidebar>
    <sidebar-mobile></sidebar-mobile>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <navbar></navbar>

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <nuxt-child></nuxt-child>
        <Footer/>
      </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  code[class*="language-"], pre[class*="language-"] {
    background: #253040;
  }
</style>