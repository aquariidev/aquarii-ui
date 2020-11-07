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
              this.selectOption(e.target.innerText);
              this.closeOptionsList();
            },
            mouseenter: () => {
              this.setPointer(index);
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
      staticClass: 'aq-select focus:outline-none flex-1',
      ref: 'input',
      domProps: {
        value: this.isOpen ? this.searchValue : this.value
      },
      attrs: {
        ...this.$attrs,
        placeholder: this.placeholder,
      },
      on: {
        click: (e: any) => {
          e.stopPropagation();
        },
        focus: (e: any) => {
          e.stopPropagation();

          this.isOpen = true;
          this.setPointer();
        },
        input: (e: any) => {
          this.searchValue = e.target.value;

          this.searchOption();
        },
      }
    });

    const selectedContentButton = h('button', {
      staticClass: 'aq-select-btn',
      attrs: {
        type: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isOpen),
        'aria-multiselectable': this.multiple
      },
      on: {
        click: (e: Event) => {
          e.preventDefault();

          if(this.value) {
            this.setPointer();
          }

          this.isOpen = !this.isOpen;

          this.inputFocus();
        },
        keyup: (e: any) => {
          if(e.keyCode === 27) {
            this.isOpen = false;
          }
        },
        keydown: this.handleKeydown
      }
    }, [
      this.multiple ? this.getMultipleContent() : this.getContent(),
      (this.searchable && this.isOpen) && input,
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
      selectedContentButton
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


    return h('div', {
      staticClass: 'aq-form',
    }, [
      this.getLabel(),
      this.custom ? formSelect : this.getSimpleSelect(),
      this.getMessage()
    ])
  }
}