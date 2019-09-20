// Support fn in which create template for render components.
export function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
}
