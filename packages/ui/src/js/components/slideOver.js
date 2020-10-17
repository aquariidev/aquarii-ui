import { leave } from '../utils/transition';
import { onClickOutside } from '../utils/observe';

export default {
    name: 'slideOver',
    selector: '.aq-slide-over',
    handler: {
        bind(el) {
            let container = el.querySelector('.slide-over-container');

            onClickOutside(container, () => {
                if(!el.classList.contains('hidden')) {
                    leave(el, {});
                }
            })

            let closeButton = el.querySelector('.slide-over-close');

            if(closeButton) {
                closeButton.addEventListener('click', (e) => {
                    leave(el, {});
                })
            }
        }
    }
}