//Declaration
const addCust_btn = 'button[ng-class="btnClass1"]'

class managerPg{
    static clickAddCustomer(){
        cy.get(addCust_btn).click()
    }
}

export default managerPg