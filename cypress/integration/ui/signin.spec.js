/// <reference types="cypress" />

describe('sign in test', () => {
    before(() => {
        cy.fixture('account').then((account) => {
            window.account = account;
        })
    })
    
    it('should redirect to login', () => {
        cy.visit('login')
    })
    it('should allow login and logout', () => {
        cy.login(window.account.email, window.account.password)
        cy.wait(3000)
        cy.url().should('not.include', 'login')
        cy.contains('Logout').click()
        cy.wait(3000)
        cy.url().should('include', 'login')
    })

    it('should error on wrong user', ()=>{
        cy.visit('login')
        cy.get('#email-input').type('shoulderror').should('have.value', 'shoulderror')
        cy.get('#pass-input').type('jfklsa').should('have.value', 'jfklsa')
        cy.get('#login-btn').click()
        cy.url().should('include', 'login')
        cy.get('.toast').should('be.visible')
    })
    
    it('should error on wrong password', () => {
        cy.visit('login')
        cy.get('#email-input').type(window.account.email).should('have.value', window.account.email)
        cy.get('#pass-input').type('jfklsa').should('have.value', 'jfklsa')
        cy.get('#login-btn').click()
        cy.url().should('include', 'login')
        cy.get('.toast').should('be.visible')
    })

})