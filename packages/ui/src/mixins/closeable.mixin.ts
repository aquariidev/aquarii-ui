import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Closeable extends Vue {
  @Prop({required: false}) closeable: any;

  /**
   * Close/destroy the component
   */
  close(e: any) {
    this.$el.parentNode?.removeChild(this.$el);

    this.$emit('remove');

    this.$destroy();
  }
}