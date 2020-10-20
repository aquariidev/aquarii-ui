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
    }
  },
  computed: {
    btnClass() {
      const classes = [];

      if(this.type) {
        classes.push(this.type);
      }

      if(this.outline !== undefined) {
        classes.push('outline')
      }

      if(this.size) {
        classes.push(this.size);
      }

      console.log(this.$parent)

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