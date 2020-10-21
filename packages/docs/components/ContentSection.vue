<template>
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="prose text-gray-500 mx-auto">
      <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{title}}</h1>
      <p class="text-xl text-gray-500 leading-8">{{desc}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>