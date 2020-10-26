import { CreateElement, VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({name: 'aq-table'})
export default class AQTable extends Vue {
  public render(h: CreateElement): VNode {
    const thead = h('thead', this.$slots.thead);
    const tbody = h('tbody', this.$slots.default);

    return h('table', {
      staticClass: 'aq-table'
    }, [
      this.$slots.thead && thead,
      this.$slots.default && tbody
    ])
  }
}