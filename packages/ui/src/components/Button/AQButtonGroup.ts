import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AQButtonGroup extends Vue {
  public render(h: any): any {
    return h('div', {
      staticClass: 'aq-btn-group',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}