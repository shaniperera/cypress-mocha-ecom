class ProductPage {

    getProductTitle() {
        return cy.get('h4.card-title');
    }

    getAddProductBtn() {
        return cy.get('button.btn.btn-info')
    }

    getCheckoutBtn() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}


export default ProductPage;