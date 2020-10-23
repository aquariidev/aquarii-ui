import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AQCard extends Vue {
  public render(h: any): any {
    return h('div', {
      domProps: {
        innerHTML: 'ANJAY'
      }
    })
  }
}