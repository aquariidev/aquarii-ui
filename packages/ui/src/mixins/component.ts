import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class AQComponent extends Vue {
  /** Props without value */
  public propsWithoutValue: any[] = [];

  /**
   * Get props without value
   * it will automatically add prefix 'aq-' to the class
   */
  getPropsWithoutValue(): any[] {
    return this.propsWithoutValue.map(v => {
      if(this.$props[v] !== undefined) {
        return `aq-${v}`;
      }
    }).filter(v => v !== undefined);
  }
}