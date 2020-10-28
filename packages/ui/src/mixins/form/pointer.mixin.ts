import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class PointerMixin extends Vue {
  pointer = 0;

  get pointerDirty() {
    return this.pointer > 0;
  }
}