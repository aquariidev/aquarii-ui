import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import Closeable from '../../mixins/closeable.mixin';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-alert'})
export default class AQAlert extends Mixins(Closeable) {
  @Prop({
    type: String,
    required: false,
    validator(value) {
      return ['warning', 'danger', 'success'].includes(value);
    }
  }) type!: string;

  /** Computed alert class */
  get alertClass() {
    const classes = [];

    if(this.type) {
      classes.push(`aq-${this.type}`);
    }

    return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    const closeButton = h('button', {
      staticClass: 'aq-close',
      on: {
        click: this.close
      }
    }, [
      h(AQIcon, {
        props: { name: 'x'}
      })
    ])

    return h('div', {
      staticClass: 'aq-alert',
      class: this.alertClass,
      attrs: {
        ...this.$attrs,
        role: 'alert'
      }
    }, [
      this.closeable && closeButton,
      this.$slots.default
    ])
  }
}