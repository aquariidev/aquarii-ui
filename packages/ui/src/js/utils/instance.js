export default function Instance($el) {
    const element = document.querySelector($el);

    if(!element) {
        this.$el = null;
    }

    this.$el = element;
}