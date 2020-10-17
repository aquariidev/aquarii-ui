export default class Instance {
    /** @type {HTMLElement} */
    $el = null;

    /**
     * Constuctor
     *
     * @param {string} $el
     * @return {void}
     */
    constructor($el) {
        const element = document.querySelector($el);

        if(element) {
            this.$el = element;
        }
    }
}