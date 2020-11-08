import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Colorable extends Vue {
  @Prop({required: false}) color: any;

  /** Computed colors property */
  get colors() {
    return ['primary', 'success', 'warning', 'danger', 'success'];
  }

  isCustomColor(): any {
    return !this.colors.includes(this.color);
  }
}