import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-badge'})
export default class AQBadge extends AQComponent {
  @Prop({required: false, type: String}) type: any;
  @Prop({required: false}) large: any;
  @Prop({required: false}) rounded: any;

  propsWithoutValue = [{name: 'large'}, {name: 'rounded'}];

  get badgeClass() {
    const classes = [];

    classes.push(...this.getPropsWithoutValue())

    if(this.type) {
      classes.push(`aq-${this.type}`);
    }

    return classes.join(' ');
  }

  /** Render component */
  public render(h: CreateElement): VNode {
    return h('span', {
      staticClass: 'aq-badge',
      class: this.badgeClass
    }, this.$slots.default);
  }
}