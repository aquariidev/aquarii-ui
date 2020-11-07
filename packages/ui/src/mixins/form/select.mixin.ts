import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator'
import AQBadge from '../../components/Badge/AQBadge';
import { isObject } from '../../util/object';

@Component
export default class SelectMixin extends Vue {
  @Prop({required: false}) value: any;
  @Prop({required: false, type: Array}) options: any;
  @Prop({required: false, type: String, default: 'Select option'}) placeholder: any;
  @Prop({required: false, type: String, default: 'default'}) type: any;
  @Prop({required: false, default: true, type: Boolean}) custom!: boolean;
  @Prop({required: false, default: false, type: Boolean}) multiple!: boolean;
  @Prop({required: false, type: String}) optionLabel: any;
  @Prop({required: false, default: true, type: Boolean}) closeOnSelect!: boolean;
  @Prop({required: false, default: true, type: Boolean}) searchable: any;
  @Prop({required: false, type: String}) trackBy: any;
  @Prop({required: false, default: true}) clearOnSelect?: boolean;

  searchValue = '';
  selectedOptions = [];
  pointer = -1;
  isOpen = false;

  optIdentifier(option: any) {
    return this.trackBy ? option[this.trackBy] : option;
  }

  /** Handle Keyboard Event */
  handleKeydown(e: any): void {
    this.handleArrowDown(e);
    this.handleArrowUp(e);
    this.handleEnter(e);
  }

  /** Handle When user press arrow down */
  handleArrowDown(e: any): void {
    if(e.code === 'ArrowDown') {
      e.preventDefault();

      if(this.pointer < this.options.length - 1) {
        this.pointer++;
      } else {
        this.pointer = 0;
      }
    }
  }

  /** Handle when user press arrow up */
  handleArrowUp(e: any): void {
    if(e.code === 'ArrowUp') {
      e.preventDefault();

      if(this.pointer > 0) {
        this.pointer--;
      } else {
        this.pointer = this.options.length - 1;
      }
    }
  }

  /** Handle When user press enter */
  handleEnter(e: any): void {
    if(e.code === 'Enter') {
      e.preventDefault();

      this.selectOption(this.determineValue());
      this.closeOptionsList();
    }
  }

  /** Determine the value to be emit to the input */
  determineValue(): any {
    if(this.trackBy) {
      return this.options[this.pointer][this.trackBy];
    }

    return this.options[this.pointer];
  }

  /** Set Pointer */
  setPointer(index?: any) {
    if(index !== undefined) {
      this.pointer = index;
      return;
    }

    if(this.trackBy) {
      this.pointer = this.options.findIndex((option: any) => option[this.trackBy] === this.value);
    } else {
      this.pointer = this.options.indexOf(this.value);
    }
  }

  /**
   * Search option by given `searchValue`
   *
   * If the option is array-object, the query will use `trackBy` props.
   */
  searchOption() {
    this.selectedOptions = this.options.filter((option: any) => {
      const optionVal = isObject(option) ? option[this.optionLabel] : option;

      return optionVal.toLowerCase().indexOf(this.searchValue) > -1;
    })
  }

  /** Close the options list only when `closeOnSelect` Props is true */
  closeOptionsList() {
    if(this.closeOnSelect) this.isOpen = false;
  }

  /**
   * Set focus to search input
   */
  inputFocus() {
    if(this.isOpen && this.searchable) {
      this.$nextTick(() => {
        const input = this.$refs.input as HTMLElement;
        input.focus();
      });
    }
  }

  /** Select option, depend on the multipe props */
  selectOption(value: any) {
    let data = [];

    if (this.multiple) {
      if(Array.isArray(this.value)) {
        data.push(...this.value);
      }

      if(data.includes(value)) {
        data = data.filter((d: any) => d !== value);
      } else {
        data.push(value);
      }
    }

    this.$emit('input', this.multiple ? data : value);

    if(this.clearOnSelect) this.searchValue = '';
  }

  /** Get simple select component */
  getSimpleSelect() {
    return this.$createElement('select', {
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
    ]);
  }

  removeSelect(value: any) {
    if(this.multiple) {

      const values = [...this.value];

      const newValue = values.filter((n: any, i: any) => {
        return n !== value;
      });

      this.$emit('input', newValue);
    }
  }


  /** Get tag component for multiple selection */
  getTag(value: any, index: any) {
    return this.$createElement('span', {
      staticClass: 'aq-badge',
      key: value,
    }, [
      value,
      this.$createElement('button', {
        staticClass: 'aq-close',
        on: {
          click: (e: any) => {

            this.removeSelect(value)
          }
        }
      }, [
        this.$createElement('aq-icon', {
          props: {
            name: 'x'
          }
        }),
      ])
    ])
  }

  /** Get Select content on multiple selection */
  getMultipleContent() {
    if(Array.isArray(this.value) && this.value.length) {
      return this.value.map((v: any, index: any) => this.getOptionComponent(this.getTag(v, index), false));
    }

    if(!this.isOpen) {
      return this.getOptionComponent(this.placeholder);
    }
  }

  /** Get Select Content on single selection */
  getContent() {
    if(!this.isOpen) {
      return this.getOptionComponent(this.value || this.placeholder);
    }

    if(this.isOpen && !this.searchable) {
      return this.getOptionComponent(this.value || this.placeholder);
    }
  }

  /** Option Component for single or multiple selection */
  getOptionComponent(element: any, noPointerEvent: boolean = true) {
    return this.$createElement('span', {
      staticClass: `aq-option flex pr-2${noPointerEvent ? ' pointer-events-none' :''}`,
    }, [
      element
    ]);
  }

  /** Is option selected */
  isOptionSelected(option: any) {
    if(this.trackBy) {
      const value = option[this.trackBy];

      return (this.multiple && Array.isArray(this.value)) ? this.value.includes(value) : this.value === value;
    }

    return this.value === this.optIdentifier(option);
  }
}