<template>
  <div>
    <aq-badge @x-click="remove(badge)" v-for="badge in badges" :key="badge" :closeable="true">
      {{badge}}
    </aq-badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badges: ['Javascript', 'Vue', 'Nuxt']
    }
  },
  methods: {
    remove(badge) {
      this.badges = this.badges.filter(data => data !== badge);
    }
  }
}
</script>