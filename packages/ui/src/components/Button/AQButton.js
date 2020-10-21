export default {
  props: {
    type: {
      type: String,
      required: false,
    },
    outline: {
      required: false,
    },
    size: {
      required: false,
      validator(value) {
        return ['small', 'large'].includes(value)
      }
    },
    block: {
      required: false,
    },
    circle: {
      required: false,
    }
  },
  computed: {
    btnClass() {
      const classes = [];

      const propsWithoutValue = ['outline', 'block', 'circle'];

      propsWithoutValue.map(v => {
        if(this.$props[v] !== undefined) {
          classes.push(v);
        }
      })

      if(this.type) {
        classes.push(this.type);
      }

      if(this.size) {
        classes.push(this.size);
      }

      return classes.join(' ')
    }
  },
  render(h) {
    return h('button', {
      staticClass: 'aq-btn',
      class: this.btnClass,
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}