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

    const append = h('span', {
      staticClass: 'add-on append'
    }, this.$slots.append)

    const content = h('div', {
      staticClass: this.$slots.append || this.$slots.prepend ? 'flex group' : ''
    }, [
      this.$slots.append && append,
      input
    ])

    return h('div', {
      staticClass: 'aq-form'
    }, [
      this.label && label,
      content
    ])
  }
}