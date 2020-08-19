/// <reference types="cypress" />

describe('auotomate djurnee.id', () => {
    before(() => {
        cy.fixture('account').then((account) => {
            window.account = account;
        })
    })
    it('testing', () => {
        cy.visit('login')
        cy.login(window.account.email, window.account.password)
        cy.wait(3000)
        cy.getCompanyLink().click()
        cy.wait(3000)
        cy.getPositionClassTab().click()
        cy.wait(2000)
        cy.getAddButton().click()
        cy.wait(1000)
        cy.createPositionClass('class title', 'description position')
        cy.getDepartmentDetailTab().click()
        cy.wait(2000)
        cy.createDepartment('department name', 'description department')
        cy.wait(2000)
        cy.createDepartmentPosition('name', 'Director', 'Director', 'Backend Engineer', 'Backend Engineer')
        cy.wait(2000)
    })
})