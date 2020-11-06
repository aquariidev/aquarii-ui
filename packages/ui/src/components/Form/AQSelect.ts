import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import FormMixin from '../../mixins/form.mixin';
import SelectMixin from '../../mixins/form/select.mixin';
import { onClickOutside } from '../../util/click-outside';
import AQIcon from '../Icon/AQIcon';

/**
 * Note
 * im struggling to naming the component because my english are bad,
 * please help me rename for each component part
 */
@Component({name: 'aq-select'})
export default class AQSelect extends Mixins(FormMixin, SelectMixin) {
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

  /** Render element */
  public render(h: CreateElement): VNode {
    const checkIcon = (option: any) => {
      option = this.optIdentifier(option);

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

    const optionsList = () => {
      const options = this.searchValue ? this.selectedOptions : this.options;

      return options.length ? options.map((option: any, index: number) => (
        h('li', {
          class: this.pointer === index && 'selection',
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

              this.closeOptionsList();
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
      staticClass: 'aq-form-control aq-select',
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
          this.setPointer();
        },
        input: (e: any) => {
          this.searchValue = e.target.value;

          this.searchOption();
        },
        keydown: this.handleKeydown
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
          const elem = this.$refs.listBox as HTMLElement;
          if(this.value) {
            this.setPointer();
          }

          elem.focus();
          e.stopPropagation();
          this.isOpen = !this.isOpen;
        },
        keyup: (e: any) => {
          if(e.keyCode === 27) {
            this.isOpen = false;
          }
        },
        keydown: this.handleKeydown
      }
    }, [
      h('span', {
        staticClass: 'aq-option',
        domProps: {
          innerHTML: this.value
        }
      }),
      h('span', {
        staticClass: 'aq-option-caret'
      }, [
        h(AQIcon, {
          props: {name: 'double-direction'}
        })
      ])
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
        staticClass: 'aq-listbox',
        ref: 'listBox',
        attrs: {
          tabindex: '-1',
          role: 'listbox',
          'aria-activedescendant': ''
        }
      }, [
        this.options && optionsList()
      ])
    ])

    const formSelect = h('div', {
      staticClass: 'aq-select',
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