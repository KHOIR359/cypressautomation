// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (email, password) => {
    cy.get('#email-input').type(email)
    cy.get('#pass-input').type(password)
    cy.get('#login-btn').click()
})

Cypress.Commands.add("getCompanyLink", () => {
    return cy.get(':nth-child(5) > .menu-list > :nth-child(1) > a')
})

Cypress.Commands.add("getPositionClassTab", () => {
    return cy.get('[href="/company/division"]')
})

Cypress.Commands.add("getDepartmentDetailTab", () => {
    return cy.get('[href="/company/department"]')
})

Cypress.Commands.add("getAddButton", () => {
    return cy.get('[alt="create"]')
})

Cypress.Commands.add("createPositionClass", (title, description) => {
    cy.get('[style="width: 380px;"] > :nth-child(2)').type(title)
    cy.get('[style="width: 380px;"] > :nth-child(4)').type(description)
    cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()

})

Cypress.Commands.add('createDepartment', (title, description)=> {
    cy.get(':nth-child(3) > .button-container > [style="display: flex; flex-direction: row;"] > img').click()
    cy.get('.is-active > .modal-content > .form-department > [style="width: 380px;"] > input.component-modal-input').type(title)
    cy.get('.is-active > .modal-content > .form-department > [style="width: 380px;"] > .text-area').type(description)
    cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()
})

Cypress.Commands.add('createDepartmentPosition', (name, department, inpclass, reportTo, copyfrom) => {
    cy.get(':nth-child(2) > .button-container > [style="display: flex; flex-direction: row;"] > img').click()
    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > .component-modal-input').type(name).should('have.value', name)
    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(4)').select(department).then((e)=> {
        cy.wrap(e).find('option:selected').then((opt)=>{
            expect(e.val()).to.equal(opt.val())
        })
    })
    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(7)').select(inpclass).then((e)=> {
        cy.wrap(e).find('option:selected').then((opt)=>{
            expect(e.val()).to.equal(opt.val())
        })
    })
    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(10)').select(reportTo).then((e)=> {
        cy.wrap(e).find('option:selected').then((opt)=>{
            expect(e.val()).to.equal(opt.val())
        })
    })

    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px;"] > .components-add-position-form > [style="width: 90%; height: 92%;"] > [style="display: flex; align-items: center; font-size: 12px;"] > .global-shadow-card > .component-modal-input-dropdown').select(copyfrom).then((e)=> {
        cy.wrap(e).find('option:selected').then((opt)=>{
            expect(e.val()).to.equal(opt.val())
        })
    })
    cy.wait(1000)
    cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()
})