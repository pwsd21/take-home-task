import { searchInputField } from "../../support/elementSelector";

describe("App login", function () {
  it("render application", function () {
    cy.initTest();
    cy.wait(2000);
    fixtureData(cy.fixture("inputData.json"));
  });

  function selector(data) {
    cy.get("table>tbody>tr>td>span");
    cy.contains(data.name).click();
    cy.get(".offcanvas-header >div").then(($div) => {
      const text = $div.text();
      if (text !== "No data") {
        cy.contains(data.name).should("exist");
      } else {
        cy.contains("No data").should("exist");
      }
    });
    cy.get("button").click();
  }

  function fixtureData(titleJson) {
    titleJson.then((data) => {
      data.forEach((data) => {
        runTestCase(data);
      });
    });
  }

  function runTestCase(data) {
    searchInputField(data.name, "input");
    cy.get("table>tbody>tr>td>span");
    cy.contains(data.name).should("exist");
    cy.get("input").clear();
    selector(data);
  }
});
