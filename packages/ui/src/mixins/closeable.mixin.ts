import { Component, Prop } from 'vue-property-decorator';
import AQComponent from './component';

@Component
export default class Closeable extends AQComponent {
  @Prop({required: false}) aqClose: any;

  /**
   * Close/destroy the component
   */
  close() {
    this.$el.parentNode?.removeChild(this.$el);
  }
}