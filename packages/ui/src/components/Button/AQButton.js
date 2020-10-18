export default {
  props: {
    type: {
      type: String,
      required: false,
    }
  },
  render(h) {
    return h('button', {
      staticClass: 'aq-btn',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}