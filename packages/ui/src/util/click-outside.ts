export function onClickOutside(el: any, cb: Function) {
  // make a event handler for click event
  const event = function (e: any) {
    var itsChildren = el.contains(e.target);
    if(e.target != el && !itsChildren) {
      return cb ? cb() : null;
    }
  };

  // Attach Event Listener to body
  document.addEventListener('click', event, false);
}