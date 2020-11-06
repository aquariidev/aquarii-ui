/**
 * Insert element to selected html element.
 *
 * Default to body
 */
export function insertElement(element: HTMLElement, parent: HTMLElement = document.body): void {
  parent.insertBefore(element, parent.lastChild);
}