import { CreateElement, VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AQComponent from '../../mixins/component';

@Component({name: 'aq-card'})
export default class AQCard extends AQComponent {
  @Prop({required: false}) body: any;
  @Prop({required: false}) raised: any;
  @Prop({required: false}) squared: any;

  propsWithoutValue = ['body', 'raised', 'squared'];

  get cardClass(): string {
   const classes = [];

   classes.push(...this.getPropsWithoutValue());

   return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    const header = h('div', {
      staticClass: 'aq-header'
    }, this.$slots.header);

    const body = h('div', {
      staticClass: 'aq-body'
    }, this.$slots.body);

    const footer = h('div', {
      staticClass: 'aq-footer'
    }, this.$slots.footer)

    return h('div', {
      staticClass: 'aq-card',
      class: this.cardClass
    }, [
      this.$slots.header && header,
      this.$slots['media-top'],
      this.$slots.default,
      this.$slots.body && body,
      this.$slots.footer && footer,
    ]);
  }
}