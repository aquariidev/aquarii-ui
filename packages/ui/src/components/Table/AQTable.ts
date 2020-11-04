import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-table'})
export default class AQTable extends AQComponent {
  @Prop({required: false}) striped: any;

  propsWithoutValue = ['striped'];

  /** Computed table class */
  get tableClass() {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    const thead = h('thead', this.$slots.thead);
    const tbody = h('tbody', this.$slots.default);

    return h('table', {
      staticClass: 'aq-table',
      class: this.tableClass
    }, [
      this.$slots.thead && thead,
      this.$slots.default && tbody
    ])
  }
}