import { Component, Prop } from 'vue-property-decorator'
import AQComponent from '../../mixins/component'

@Component({name: 'aq-input'})
export default class AQInput extends AQComponent {
  @Prop({required: false}) value: any;
  @Prop({type: String, required: false}) label: any;
  @Prop({required: false, default: undefined}) filled!: any;

  propsWithoutValue = ['filled'];

  /** Computed input class */
  get inputClass(): string {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    if(this.$slots.append) classes.push('append');
    if(this.$slots.prepend) classes.push('prepend');

    return classes.join(' ');
  }

  /** Message element */
  getMessage(type?: string): any|void {
    const defaultMessage = this.$slots.message;

    const message = this.$slots[`message-${type}`];

    if(defaultMessage || message) {
      return this.$createElement('p', {
        staticClass: 'message'
      }, type ? message : defaultMessage);
    }
  }

  public render(h: any): any {
    const input = h('input', {
      staticClass: 'aq-form-control',
      class: this.inputClass,
      domProps: {
        value: this.value
      },
      on: {
        ...this.$listeners,
        input: (e: any) => {
          this.$emit('input', e.target.value)
        }
      },
      attrs: {
        ...this.$attrs
      }
    });

    const label = h('label', {
      domProps: {
        innerHTML: this.label
      }
    });

    const append = h('span', {
      staticClass: 'add-on append'
    }, this.$slots.append);

    const prepend = h('span', {
      staticClass: 'add-on prepend'
    }, this.$slots.prepend);

    const content = h('div', {
      staticClass: this.$slots.append || this.$slots.prepend ? 'group' : ''
    }, [
      this.$slots.append && append,
      input,
      this.$slots.prepend && prepend
    ]);

    return h('div', {
      staticClass: 'aq-form'
    }, [
      this.label && label,
      content,
      this.getMessage()
    ]);
  }
}