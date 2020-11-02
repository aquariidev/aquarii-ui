import notification from './Notification/index';

export default (Vue: any) => {
  Vue.prototype.$aq = {
    notification
  }
}