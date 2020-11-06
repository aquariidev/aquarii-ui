import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator'
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

      if(!isObject(option)) {
        console.log(option);
      }

      return optionVal.toLowerCase().indexOf(this.searchValue) > -1;
    })
  }

  /** Close the options list only when `closeOnSelect` Props is true */
  closeOptionsList() {
    if(this.closeOnSelect) this.isOpen = false;
  }
}