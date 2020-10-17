import Aquarii from './api/index';

export default function (components) {
    components.map(component => {
        Aquarii.component(component.name, component);
    })
}