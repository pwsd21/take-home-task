export function searchInputField(data, getElement) {
  cy.get(getElement).type(`${data}`);
}
