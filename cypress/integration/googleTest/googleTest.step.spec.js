import loginPg from '../../support/pageObject/xyzBank.login.page'
import managerPg from '../../support/pageObject/xyzBank.manager.page'
Given('I navigate to the website',()=>{

    loginPg.visit()
})

When('click on bank manager login button',()=>{
    // cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
    loginPg.clickBankManager()

})

And('validate the page title {string}',(title)=>{
    loginPg.validate(title)
})


When('click on add customer button',()=>{
    managerPg.clickAddCustomer()
})
