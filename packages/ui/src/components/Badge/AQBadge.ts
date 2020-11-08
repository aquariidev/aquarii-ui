import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import Closeable from '../../mixins/closeable.mixin';
import AQComponent from '../../mixins/component';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-badge'})
export default class AQBadge extends Mixins(Closeable, AQComponent) {
  @Prop({required: false, type: String}) type: any;
  @Prop({required: false}) large: any;
  @Prop({required: false}) rounded: any;

  propsWithoutValue = ['large', 'rounded'];

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
    const closeButton = h('button', {
      staticClass: 'aq-close',
      attrs: {
        type: 'button',
      },
      on: {
        click: this.close
      }
    }, [
      h(AQIcon, {
        props: { name: 'x'}
      })
    ])

    return h('span', {
      staticClass: 'aq-badge',
      class: this.badgeClass
    }, [
      this.$slots.default,
      this.closeable && closeButton
    ]);
  }
}