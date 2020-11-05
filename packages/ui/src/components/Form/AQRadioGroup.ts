import { CreateElement, VNode } from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-radio-group'})
export default class AQRadioGroup extends Mixins(AQComponent) {
  @Prop({}) value: any;
  @Prop({required: true}) name: any;

  /** Render element */
  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'aq-radio-group',
    }, this.$slots.default);
  }
}