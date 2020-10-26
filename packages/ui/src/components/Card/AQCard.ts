import { CreateElement, VNode } from 'vue'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AQCard extends Vue {
  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'aq-card'
    }, this.$slots.default)
  }
}