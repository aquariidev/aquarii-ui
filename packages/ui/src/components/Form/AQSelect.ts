import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import FormMixin from '../../mixins/form.mixin';
import { onClickOutside } from '../../util/click-outside';

@Component({name: 'aq-select'})
export default class AQSelect extends Mixins(FormMixin) {
  @Prop({required: false}) value: any;
  @Prop({required: false, type: String, default: 'Select option'}) placeholder: any;
  @Prop({required: false, type: String, default: 'default'}) type: any;
  @Prop({required: false, default: false, type: Boolean}) custom!: boolean;
  @Prop({required: false, default: false, type: Boolean}) multiple!: boolean;
  @Prop({required: false, type: Array}) options: any;
  @Prop({required: false, type: String}) optionLabel: any;
  @Prop({required: false, default: true, type: Boolean}) closeOnSelect!: boolean;

  isOpen = false;

  mounted() {
    if(this.$refs.selectContent) {
      onClickOutside(this.$refs.selectContent, (e: any) => {
        this.isOpen = false;
      })
    }
  }

  private optIdentifier(option: any) {
    return this.optionLabel ? option[this.optionLabel] : option;
  }

  /** Render element */
  public render(h: CreateElement): VNode {
    const checkIcon = (option: any) => {
      option = this.optionLabel ? option[this.optionLabel] : option;

      if(option === this.value) {
        return h('span', {
          staticClass: 'aq-option-icon',
        }, [
          h('aq-icon', {
            props: {
              name: 'check'
            }
          })
        ])
      }
    }

    const optionLists = () => {
      return this.options.map((option: any, index: number) => (
        h('li', {
          staticClass: 'text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9',
          attrs: {
            role: 'option',
            id: `${this.optIdentifier(option).replace(' ', '')}-item-${index}`,
            'aria-selected': this.value == this.optIdentifier(option)
          },
          on: {
            click: (e: any) => {
              this.$emit('input', e.target.innerText);
              if(this.closeOnSelect) this.isOpen = false;
            }
          }
        }, [
          h('span', {
            staticClass: 'truncate font-normal block',
            attrs: {
              'aq-option-value': this.optIdentifier(option)
            },
            domProps: {
              innerText: this.optionLabel ? option[this.optionLabel] : option,
            }
          }),
          checkIcon(option)
        ])
      ));
    }

    const currentValue = h('span', {
      staticClass: 'selected-content'
    }, [
      h('button', {
        staticClass: 'form-select',
        attrs: {
          type: 'button',
          'aria-haspopup': 'listbox',
          'aria-expanded': this.isOpen ? 'true' : 'false',
          'aria-multiselectable': this.multiple
        },
        on: {
          click: (e: Event) => {
            e.stopPropagation();
            this.isOpen = !this.isOpen;
          },
          keyup: (e: any) => {
            if(e.keyCode === 27) {
              this.isOpen = false;
            }
          },
          keydown: (e: any) => {
            e.preventDefault();
          }
        }
      }, [
        h('span', {
          staticClass: 'option',
          domProps: {
            innerHTML: this.value
          }
        })
      ])
    ]);

    const selectContent = h('div', {
      ref: 'selectContent',
      staticClass: 'select-content',
      directives: [
        {
          name: 'show',
          value: this.isOpen
        }
      ]
    }, [
      h('ul', {
        staticClass: 'max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5',
        attrs: {
          tabindex: '-1',
          role: 'listbox',
        }
      }, [
        this.options && optionLists()
      ])
    ])

    const formSelect = h('div', {
      staticClass: 'aq-form-select',
      attrs: {
        tabindex: "0"
      }
    }, [currentValue, selectContent])

    const select = h('select', {
      staticClass: 'aq-form-control form-select',
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        input: (e: any) => {
          this.$emit('input', e.target.value);
        }
      }
    }, [
      this.$slots.default
    ])

    return h('div', {
      staticClass: 'aq-form',
    }, [
      this.getLabel(),
      this.custom ? formSelect : select,
      this.getMessage()
    ])
  }
}