// Style
import './button.css';

import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';
import AQLoading from '../Icon/AQLoading';

@Component({name: 'aq-button'})
export default class AQButton extends AQComponent {
  @Prop({type: String, required: false}) color: any;
  @Prop({required: false}) outline: any;
  @Prop({
    required: false,
    validator(value: any): boolean {
      return ['small', 'large'].includes(value)
    }
  }) size!: string;
  @Prop({required: false}) block: any;
  @Prop({required: false}) circle: any;
  @Prop({required: false}) icon: any;
  @Prop({required: false}) raised: any;
  @Prop({required: false, default: false, type: Boolean}) loading: any;

  propsWithoutValue = ['outline', 'block', 'circle', 'icon', 'raised'];

  /** Button computed class */
  get btnClass(): string {
    const classes = [];

    if(this.color) {
      classes.push(`aq-${this.color}`);
    }

    if(this.size) {
      classes.push(`aq-${this.size}`);
    }

    classes.push(...this.getPropsWithoutValue());

    return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    return h('button', {
      staticClass: 'aq-btn',
      class: this.btnClass,
      on: {
        ...this.$listeners
      }
    }, [
      this.loading && h(AQLoading),
      this.$slots.default
    ]);
  }
}