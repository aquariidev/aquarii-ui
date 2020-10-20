export default {
  name: 'AQButtonGroup',
  render(h) {
    return h('div', {
      staticClass: 'relative z-0 inline-flex shadow-sm rounded-md',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}