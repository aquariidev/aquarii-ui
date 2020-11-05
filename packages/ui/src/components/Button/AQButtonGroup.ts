import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({name: 'aq-button-group'})
export default class AQButtonGroup extends Vue {
  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'aq-btn-group',
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}