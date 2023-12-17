/// <reference types ="Cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductPage from '../pageObjects/ProductPage';
import CheckoutSummaryPage from "../pageObjects/CheckoutSummaryPage";
import DeliveryPage from "../pageObjects/DeliveryPage";

describe('Complete checkout of products added to cart', () => {
    let testData;
    before(() => {
        cy.fixture('productData').then((user) => {
            testData = user
        })
        cy.visit(Cypress.env('baseUrl') + '/angularpractice')

    })
    it('should add products to cart and complete checkout successfully', () => {
        const homePage = new HomePage();
        const productPage = new ProductPage;
        const checkoutSummaryPage = new CheckoutSummaryPage;
        const deliveryPage = new DeliveryPage;

        homePage.getShopLink().click();

        //custom command to add products from fixture data
        testData.products.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutBtn().click();


        let sum = 0;
        checkoutSummaryPage.getProductPrice().each((el, index, list) => {
            const priceArray = el.text().split(" ");
            const value = priceArray[1].trim()
            sum = sum + Number(value)
        });

        checkoutSummaryPage.getCheckoutTotal().then((el) => {
            const totalPrice = el.text().split(" ")
            const total = Number(totalPrice[1].trim());
            expect(total).to.equal(sum)
        })

        checkoutSummaryPage.getcheckoutBtn().click();

        deliveryPage.getCountry().type('Ger');
        deliveryPage.getFirstCountry().click();
        deliveryPage.getTandC().check(({ force: true }));
        deliveryPage.getPurchaseBtn().click();
        deliveryPage.getPurchaseSuccessText().should('contain.text', "Success")
    });
});