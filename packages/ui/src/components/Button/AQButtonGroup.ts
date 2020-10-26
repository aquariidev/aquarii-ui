import { CreateElement, VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import AQComponent from '../../mixins/component'

@Component
export default class AQButtonGroup extends AQComponent {
  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'aq-btn-group',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}