class ProductPage
{


    getPageTitle()
    {
        return cy.get('.title');
    }

    getAllProducts()
    {
        return cy.get('.inventory_item_name');
    }

    addItemToCart()
    {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    clickLogOut()
    {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }

}
module.exports = new ProductPage()