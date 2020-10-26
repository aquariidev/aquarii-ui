import { CreateElement, VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AQComponent from '../../mixins/component';

@Component
export default class AQCard extends AQComponent {
  @Prop({required: false}) body: any;

  propsWithoutValue = ['body']

  get cardClass(): string {
   const classes = [];

   classes.push(...this.getPropsWithoutValue())

   return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'aq-card',
      class: this.cardClass
    }, this.$slots.default)
  }
}