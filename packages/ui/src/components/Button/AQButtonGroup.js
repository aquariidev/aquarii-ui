export default {
  name: 'AQButtonGroup',
  render(h) {
    return h('div', {
      staticClass: 'aq-btn-group',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}