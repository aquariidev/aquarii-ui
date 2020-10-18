import { onClickOutside } from '../utils/observe';

export default {
    name: 'sidebar',
    selector: '.aq-sidebar',
    handler: {
        bind(el) {
            let container = el.querySelector('.sidebar-container');

            // onClickOutside(container, () => {
            //     el.classList.add('hidden')
            // })
        }
    }
}