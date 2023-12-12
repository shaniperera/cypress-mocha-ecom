class CheckoutSummaryPage {

    getcheckoutBtn() {
        return cy.get('.btn-success');
    }

    getProductPrice() {
        return cy.get('tr td:nth-child(4) strong')
    }

    getCheckoutTotal() {
        return cy.get('h3 strong')
    }
}

export default CheckoutSummaryPage