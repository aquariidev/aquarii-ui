import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-table'})
export default class AQTable extends AQComponent {
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