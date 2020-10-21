export default {
  name: 'AQInput',
  inheritAttrs: false,
  props: {
    value: {
      required: false,
    },
    label: {
      type: String,
      required: false,
    }
  },
  render(h) {
    const input = h('input', {
      staticClass: 'aq-form-control',
      domProps: {
        value: this.value
      },
      on: {
        ...this.$listeners,
        input: (e) => {
          this.$emit('input', e.target.value)
        }
      },
      attrs: {
        ...this.$attrs
      }
    })

    const label = h('label', {
      domProps: {
        innerHTML: this.label
      }
    })

    const content = h('div', [
      this.label && label,
      input
    ])

    return h('div', {
      staticClass: 'mb-4'
    }, [content])
  }
}