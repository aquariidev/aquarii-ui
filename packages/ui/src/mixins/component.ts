import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import { isObject } from '../util/object';

@Component
export default class AQComponent extends Vue {
  /** Props without value */
  public propsWithoutValue: any[] = [];

  /**
   * Get props without value
   * if the props contain object,
   * it will automatically add prefix 'aq-' to the class
   * the object 'key' should be 'name' with props as a value
   */
  getPropsWithoutValue(): any[] {
    const data = this.propsWithoutValue
      .filter(v => {
        return isObject(v) ? this.$props[v.name] !== undefined : this.$props[v] !== undefined;
      })
      .map(v => {
        if(isObject(v)) {
          return `aq-${v.name}`;
        }

        return v;
      });

    return data;
  }
}