/// <reference types="cypress" />

import 'cypress-file-upload';
import companyobject from '../pageObject/company';
const company = new companyobject()

describe('auotomate djurnee.id', () => {
    before(() => {
        cy.fixture('account').then((account) => {
            window.account = account;
        })
    })

    beforeEach(()=>{
        cy.visit('login')
        cy.login(window.account.email, window.account.password)
        cy.wait(3000)
    })

    it('should update profile', ()=>{
        company.getCompanyNav().click()
        company.getCompanyDetailTab().click()
        cy.wait(3000)
        company.getFileInput().attachFile('img/profile.png')

        company.getCompanyNameInput().clear().type('djurnee2')
        company.getCompanyEmailInput().clear().type('djurnee@djurnee.id')
        company.getCompanyAddressInput().clear().type('jl djurnee')
        company.getCompanyCityInput().click()
        cy.get('#react-select-4-option-59').click({force:true});
        company.getCompanyZipInput().clear().type('24010')
        company.getCompanyPhoneInput().type('0123456789')
        company.getCompanyFaxInput().type('2983109')
        company.bankform.addAccount().click()
        cy.wait(1000)
        company.bankform.title().type('Bank Title')
        company.bankform.accountName().type('john doe')
        company.bankform.bankName().click()
        company.bankform.bankNameOption().contains('Bank Mandiri').click()
        company.bankform.accountNumber().type('3289427394')
        company.bankform.branch().type('tes')
        company.bankform.coa().type('tes{enter}')
        cy.wait(1000)
        company.bankform.addAccount().click()
        cy.wait(1000)
        company.cashform.pick()
        company.cashform.title().type('cashform name')
        company.cashform.coa().type('cashform coa{enter}')
    })

    it('should add new position class', () => {
        company.getCompanyNav().click()
        cy.wait(3000)
        company.getPositionClassTab().click()
        cy.wait(2000)
        company.getPositionClassAddButton().click()
        cy.wait(1000)
        cy.createPositionClass('title', 'description position')
    })

    it('should add new department detail', () => {
        company.getCompanyNav().click()
        cy.wait(3000)
        company.getDepartmentDetailTab().click()
        cy.wait(2000)
        cy.createDepartment('name', 'description department')
        cy.wait(2000)
        cy.createDepartmentPosition('name', 'Director', 'Director', 'Backend Engineer', 'Backend Engineer')
        cy.wait(2000)
    })
})