import { CreateElement } from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '../../mixins/form.mixin';

@Component({name: 'aq-form-input'})
export default class AQFormInput extends Mixins(FormMixin) {
  @Prop({required: false}) value: any;
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

  public render(h: CreateElement): any {
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
      staticClass: 'aq-form space-y-1'
    }, [
      this.getLabel(),
      content,
      this.getMessage()
    ]);
  }
}