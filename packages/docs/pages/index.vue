<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="relative pt-6 pb-12 sm:pb-32">
      <main class="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
        <div class="mx-auto max-w-screen-xl">
          <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h2 class="mt-4 text-center text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
                  Component Framework for
                  <br class="hidden md:inline">
                  <span class="text-indigo-400">Vue</span>
                </h2>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center">
                  Aquarii is a simple Vue Component Framework that help you to create a <strike><b>Bad</b></strike> <b>Good</b> Applications
                </p>
                <div class="mt-5 text-center">
                  <aq-button color="primary" @click="$router.push('/docs')" size="large">Documentation</aq-button>
                  <aq-button size="large">Admin Demo</aq-button>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>