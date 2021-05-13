/** DECLARATION */
const baseURL = 'http://www.way2automation.com/angularjs-protractor/banking/#/login'
class loginPg{
static visit(){
    cy.visit(baseURL)

}
    static clickBankManager(){
        cy.contains('Bank Manager Login').click()
    }

    static validate(title){
        cy.title().should('eq', title)

    }
}
export default loginPg