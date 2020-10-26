import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component
export default class AQButton extends AQComponent {
  @Prop({type: String, required: false}) type: any;
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

  propsWithoutValue = ['outline', 'block', 'circle', 'icon'];

  /** Button computed class */
  get btnClass(): string {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    if(this.type) {
      classes.push(this.type);
    }

    if(this.size) {
      classes.push(this.size);
    }

    return classes.join(' ');
  }

  public render(h: CreateElement): VNode {
    return h('button', {
      staticClass: 'aq-btn',
      class: this.btnClass,
      on: {
        ...this.$listeners
      }
    }, this.$slots.default);
  }
}