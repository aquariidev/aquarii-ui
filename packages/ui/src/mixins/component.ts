import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import { isObject } from '../util/object';

@Component
export default class AQComponent extends Vue {
  /** Props without value */
  public propsWithoutValue: any[] = [];

  /**
   * Get props without value
   * it will automatically add prefix 'aq-' to the class
   */
  getPropsWithoutValue(): any[] {
    return this.propsWithoutValue.map(v => `aq-${v}`);
  }
}