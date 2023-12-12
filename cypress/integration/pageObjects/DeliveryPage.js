class DeliveryPage {

    getCountry() {
        return cy.get('#country');
    }

    getFirstCountry() {
        return cy.get('.suggestions>:nth-child(1)')
    }

    getTandC() {
        return cy.get('#checkbox2')
    }

    getPurchaseBtn() {
        return cy.get('input[value="Purchase"]')
    }
    
    getPurchaseSuccessText() {
        return cy.get('.alert-success')
    }
}

export default DeliveryPage;
