import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PurchasePage from '../../pages/PurchasePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  // jQuery veya diğer third-party script hatalarını testin başarısız olmasına neden etme
  return false;
});

Given("User navigates to login url", () => {
  cy.visit(PurchasePage.url); 
  cy.get(PurchasePage.loginForm).click();
});

When("User enters valid email adress", () => {
  cy.get(PurchasePage.email).type("testuser@example.com");
});

When("User enters valid password", () => {
  cy.get(PurchasePage.password).type("Password123!");
});

When("User clicks login button", () => {
  cy.get(PurchasePage.loginBtn).click();
});

When("User selects an item", () => {
  cy.get(PurchasePage.productAddCart).first().click();
});

When("User clicks purchase button", () => {
  cy.get(PurchasePage.goToCart).click();
});

When("User completes purchase process", () => {
cy.get(PurchasePage.creditCardNumber).type('4242424242424242');
cy.get(PurchasePage.expireMonth).type('12');
cy.get(PurchasePage.expireYear).type('34');
cy.get(PurchasePage.CVC).type('123');
cy.get(PurchasePage.creditCardHolder).type('Test User');
cy.get(PurchasePage.completeOrderBtn).click();
});

Then("User verifies successful purchase process", () => {
  cy.contains("Siparişiniz alınmıştır").should("be.visible");
});


