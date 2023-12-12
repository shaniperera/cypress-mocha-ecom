/// <reference types ="Cypress" />

import HomePage from '../pageObjects/HomePage';

describe('Fill out user details and submit form', () => {
    let testData;
    before(() => {

        cy.fixture('userData').then((user) => {
            testData = user
        })
        cy.visit(Cypress.env('baseUrl') + '/angularpractice')

    })
    it('should fill out user details and submit form successfully', () => {
        const homePage = new HomePage();

        homePage.getNameField().type(testData.name);
        homePage.getEmailField().type(testData.email);
        homePage.getGender().select(testData.gender);
        homePage.getDOBField().type(testData.DOB);
        homePage.getDataBinding().should('have.value', testData.name);
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getSubmitFormBtn().click();
        homePage.getPurchaseSuccessText().should('contain.text', "Success");
    });

});