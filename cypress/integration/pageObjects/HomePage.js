class HomePage {

    getNameField() {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getEmailField() {
        return cy.get('input[name="email"]')
    }

    getDOBField() {
        return cy.get('input[name="bday"]')
    }

    getDataBinding() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getSubmitFormBtn() {
        return cy.get('input[type="submit"]')
    }

    getShopLink() {
        return cy.get('.nav-item:nth-child(2)')
    }
    getPurchaseSuccessText() {
        return cy.get('.alert-success')
    }


}

export default HomePage;