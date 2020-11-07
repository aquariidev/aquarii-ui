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

  searchValue = '';
  selectedOptions = [];
  pointer = -1;
  isOpen = false;

  optIdentifier(option: any) {
    return this.optionLabel ? option[this.optionLabel] : option;
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

      this.$emit('input', this.determineValue());
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
  setPointer() {
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
  selectOption(option: any, value: any) {
    const data = [];

    if (Array.isArray(this.value) && this.multiple) {
      data.push(...this.value);
    }

    data.push(value);

    this.$emit('input', this.multiple ? data : value);
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

  getMultipleContent() {
    if(this.multiple && Array.isArray(this.value)) {
      return this.value.map((v: any) => {
        return this.getOptionComponent(this.$createElement(AQBadge, [v]))
      });
    }

    return this.getOptionComponent(this.placeholder);
  }

  getOptionComponent(element: any) {
    return this.$createElement('span', {
      staticClass: 'aq-option pr-2 pointer-events-none',
    }, [
      element
    ]);
  }

  /**
   * Determine the select content
   *
   */
  determineSelectContent() {
    if(!this.isOpen) {
      if (this.multiple) {
        return this.getMultipleContent();
      }
    }

    if(this.isOpen) {
      if (this.multiple && this.value) {
        return this.getMultipleContent();
      }

      if(!this.searchable) {
        return this.getOptionComponent(this.value || this.placeholder);
      }
    }

    if(!this.isOpen && !this.multiple) {
      return this.getOptionComponent(this.value || this.placeholder);
    }
  }
}