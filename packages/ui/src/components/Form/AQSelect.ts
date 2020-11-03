import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import FormMixin from '../../mixins/form.mixin';
import { onClickOutside } from '../../util/click-outside';
import AQIcon from '../Icon/AQIcon';

/**
 * Note
 * im struggling to naming the component because my english are bad,
 * please help me rename for each component part
 */

@Component({name: 'aq-select'})
export default class AQSelect extends Mixins(FormMixin) {
  @Prop({required: false}) value: any;
  @Prop({required: false, type: String, default: 'Select option'}) placeholder: any;
  @Prop({required: false, type: String, default: 'default'}) type: any;
  @Prop({required: false, default: true, type: Boolean}) custom!: boolean;
  @Prop({required: false, default: false, type: Boolean}) multiple!: boolean;
  @Prop({required: false, type: Array}) options: any;
  @Prop({required: false, type: String}) optionLabel: any;
  @Prop({required: false, default: true, type: Boolean}) closeOnSelect!: boolean;
  @Prop({required: false, default: true, type: Boolean}) searchable: any;

  searchValue = '';
  selectedOptions = [];
  isOpen = false;

  mounted() {
    if(this.$refs.formSelect) {
      onClickOutside(this.$refs.formSelect, (e: any) => {
        this.isOpen = false;
      })
    }
  }

  private optIdentifier(option: any) {
    return this.optionLabel ? option[this.optionLabel] : option;
  }

  searchOption() {
    this.selectedOptions = this.options.filter((option: any) => {
      return option[this.optionLabel].toLowerCase().indexOf(this.searchValue) > -1;
    })
  }

  /** Render element */
  public render(h: CreateElement): VNode {
    const checkIcon = (option: any) => {
      option = this.optionLabel ? option[this.optionLabel] : option;

      if(option === this.value) {
        return h('span', {
          staticClass: 'aq-option-icon',
        }, [
          h(AQIcon, {
            props: {
              name: 'check'
            }
          })
        ])
      }
    }

    const optionLists = () => {
      const options = this.searchValue ? this.selectedOptions : this.options;

      return options.length ? options.map((option: any, index: number) => (
        h('li', {
          attrs: {
            role: 'option',
            id: `${this.optIdentifier(option).replace(' ', '')}-item-${index}`,
            'aria-selected': this.value == this.optIdentifier(option)
          },
          on: {
            click: (e: any) => {
              this.$emit('input', e.target.innerText);

              const elem = this.$refs.listBox as HTMLElement;
              elem.setAttribute('aria-activedescendant', `${this.optIdentifier(option).replace(' ', '')}-item-${index}`);

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
              innerText: this.optIdentifier(option),
            }
          }),
          checkIcon(option)
        ])
      ))
      :
      h('li', [
        h('p', {
          domProps: {
            innerText: 'No options found'
          }
        })
      ])
    }

    const input = h('input', {
      staticClass: 'aq-form-control aq-form-select',
      domProps: {
        value: this.isOpen ? this.searchValue : this.value
      },
      attrs: {
        ...this.$attrs,
        placeholder: this.value || this.placeholder
      },
      on: {
        focus: (e: any) => {
          this.isOpen = true;
        },
        input: (e: any) => {
          this.searchValue = e.target.value;

          this.searchOption();
        }
      }
    });

    const selectedContentButton = h('button', {
      attrs: {
        type: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isOpen),
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
    ]);

    const currentValue = h('span', {
      staticClass: 'selected-content'
    }, [
      this.searchable ? input : selectedContentButton
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
        ref: 'listBox',
        attrs: {
          tabindex: '-1',
          role: 'listbox',
          'aria-activedescendant': ''
        }
      }, [
        this.options && optionLists()
      ])
    ])

    const formSelect = h('div', {
      staticClass: 'aq-form-select',
      ref: 'formSelect',
      attrs: {
        tabindex: '0'
      }
    }, [currentValue, selectContent])

    const select = h('select', {
      staticClass: 'aq-form-control',
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