import { CreateElement } from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '../../mixins/form.mixin';

@Component({name: 'aq-input'})
export default class AQInput extends Mixins(FormMixin) {
  @Prop({required: false}) value: any;
  @Prop({required: false, default: undefined}) filled!: any;
  @Prop({required: false, default: false, type: Boolean }) appendInline?: boolean;
  @Prop({required: false, default: false, type: Boolean}) prependInline?: boolean;

  propsWithoutValue = ['filled'];

  /** Mounted */
  mounted() {
    const input = this.$refs.input as HTMLElement;

    if(this.appendInline) {
      const append = this.$refs.append as HTMLElement;

      input.style.paddingLeft = `${append.clientWidth + 5}px`;
    }

    if(this.prependInline) {
      const prepend = this.$refs.prepend as HTMLElement;

      input.style.paddingRight = `${prepend.clientWidth + 5}px`;
    }
  }

  /** Computed input class */
  get inputClass(): string {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    if (this.$slots.append) classes.push('aq-append');
    if (this.$slots.prepend) classes.push('aq-prepend');

    return classes.join(' ');
  }

  get formGroupClass(): string {
    const classes = ['aq-form-content'];

    if (this.appendInline) classes.push('aq-append-inline');
    if (this.prependInline) classes.push('aq-prepend-inline');

    return classes.join(' ');
  }

  public render(h: CreateElement): any {
    const input = h('input', {
      staticClass: 'aq-form-control',
      ref: 'input',
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
      staticClass: `aq-add-on ${this.appendInline ? 'aq-append-inline': 'aq-append'}`,
      ref: 'append'
    }, this.$slots.append);

    const prepend = h('span', {
      staticClass: `aq-add-on ${this.prependInline ? 'aq-prepend-inline': 'aq-prepend'}`,
      ref: 'prepend'
    }, this.$slots.prepend);

    const content = h('div', {
      staticClass: this.$slots.append || this.$slots.prepend ? 'aq-form-group' : '',
      class: this.formGroupClass
    }, [
      this.$slots.append && append,
      input,
      this.$slots.prepend && prepend
    ]);

    return h('div', {
      staticClass: 'aq-form'
    }, [
      this.getLabel(),
      content,
      this.getMessage(),
      this.getMessage('error')
    ]);
  }
}