import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class AQComponent extends Vue {
  /** Props without value */
  public propsWithoutValue: string[] = [];

  /** Get props without value */
  getPropsWithoutValue(): any[] {
    const data = this.propsWithoutValue.filter(v => this.$props[v] !== undefined);

    return data;
  }
}