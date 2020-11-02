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

  public render(h: CreateElement): VNode {
    const closeButton = h('button', {
      staticClass: 'aq-close',
      on: {
        click: (e: any) => this.close()
      }
    }, [
      h(AQIcon, {
        props: { name: 'x'}
      })
    ])

    return h('div', {
      staticClass: 'aq-alert',
      class: this.type && `aq-${this.type}`,
      attrs: {
        ...this.$attrs,
        role: 'alert'
      }
    }, [
      this.aqClose !== undefined && closeButton,
      this.$slots.default
    ])
  }
}