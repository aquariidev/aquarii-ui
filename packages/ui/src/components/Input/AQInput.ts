import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AQInput extends Vue {
  @Prop({required: false}) value: any
  @Prop({type: String, required: false}) label: any
  @Prop({required: false, default: undefined}) filled!: any

  get inputClass(): string {
    const classes = []

    const propsWithoutValue = ['filled']

    propsWithoutValue.map(v => {
      if(this.$props[v] !== undefined) {
        classes.push(v)
      }
    })

    if(this.$slots.append) classes.push('append')
    if(this.$slots.prepend) classes.push('prepend')

    return classes.join(' ')
  }

  public render(h: any): any {
    const message = h('p', {
      staticClass: 'message',
    }, this.$slots.message)

    const input = h('input', {
      staticClass: 'aq-form-control',
      class: this.inputClass,
      domProps: {
        value: this.value
      },
      on: {
        ...this.$listeners,
        input: (e: any) => {
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

    const prepend = h('span', {
      staticClass: 'add-on prepend'
    }, this.$slots.prepend)

    const content = h('div', {
      staticClass: this.$slots.append || this.$slots.prepend ? 'group' : ''
    }, [
      this.$slots.append && append,
      input,
      this.$slots.prepend && prepend
    ])

    return h('div', {
      staticClass: 'aq-form'
    }, [
      this.label && label,
      content,
      this.$slots.message && message
    ])
  }
}