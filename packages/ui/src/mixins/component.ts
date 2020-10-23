import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class AQComponent extends Vue {
  static install: (vue: any) => void

  static use: (vue: any) => any
}