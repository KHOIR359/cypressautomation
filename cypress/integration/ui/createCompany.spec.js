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

    beforeEach(() => {
        cy.visit('login')
        cy.login(window.account.email, window.account.password)
        cy.wait(3000)
    })

    // it('should update profile', ()=>{
    //     company.getCompanyNav().click()
    //     company.getCompanyDetailTab().click()
    //     cy.wait(3000)
    //     company.getFileInput().attachFile('img/profile.png')

    //     company.getCompanyNameInput().clear().type('djurnee2')
    //     company.getCompanyEmailInput().clear().type('djurnee@djurnee.id')
    //     company.getCompanyAddressInput().clear().type('jl djurnee')
    //     company.getCompanyCityInput().click()
    //     cy.get('#react-select-4-option-59').click({force:true});
    //     company.getCompanyZipInput().clear().type('24010')
    //     company.getCompanyPhoneInput().type('0123456789')
    //     company.getCompanyFaxInput().type('2983109')
    //     company.bankform.addAccount().click()
    //     cy.wait(1000)
    //     company.bankform.title().type('Bank Title')
    //     company.bankform.accountName().type('john doe')
    //     company.bankform.bankName().click()
    //     company.bankform.bankNameOption().contains('Bank Mandiri').click()
    //     company.bankform.accountNumber().type('3289427394')
    //     company.bankform.branch().type('tes')
    //     company.bankform.coa().type('tes{enter}')
    //     cy.wait(1000)
    //     company.bankform.addAccount().click()
    //     cy.wait(1000)
    //     company.cashform.pick()
    //     company.cashform.title().type('cashform name')
    //     company.cashform.coa().type('cashform coa{enter}')
    // })

    // it('should add new position class', () => {
    //     company.getCompanyNav().click()
    //     cy.wait(3000)
    //     company.getPositionClassTab().click()
    //     cy.wait(2000)
    //     company.getPositionClassAddButton().click()
    //     cy.wait(1000)
    //     cy.createPositionClass('title', 'description position')
    //     cy.wait(1000)
    //     cy.get('tbody tr').last().then((e) => {
    //         cy.get('tbody tr').last().find('td').first().then((el) => {
    //             if (el.text() == 'title') {
    //                 cy.get('tbody tr').last().find('[alt="edit"]').click({
    //                     force: true
    //                 })
    //                 cy.get('.component-modal-input').eq(0).clear().type('test edited')
    //                 cy.get('.component-modal-input').eq(1).clear().type('description edited')
    //                 cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()
    //                 cy.wait(1000)
    //             }
    //         })
    //     })

    //     cy.get('tbody tr').each((e, i, l) => {
    //         cy.get('tbody tr').eq(i).find('td').eq(0).then((el) => {
    //             if (el.text() == 'test edited') {
    //                 cy.get('tbody tr').eq(i).find('[alt="delete"]').click({
    //                     force: true
    //                 })
    //                 cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click({
    //                     multiple: true,
    //                     force: true
    //                 })
    //                 cy.wait(3000)
    //             }
    //         })
    //     })

    //     cy.pause()
    // })

    it('should add new department detail', () => {
        company.getCompanyNav().click()
        cy.wait(3000)
        company.getDepartmentDetailTab().click()
        cy.wait(2000)
        // cy.createDepartment('name', 'description department')
        // cy.wait(2000)
        // cy.get('.card-text').each((e, i) => {
        //     cy.get('.card-text').eq(i).then((el) => {
        //         if (el.text() == 'name') {
        //             cy.get('.card-text').eq(i).next().click({
        //                 force: true
        //             })
        //             cy.wait(1000)
        //             cy.get('.component-modal-input').invoke('show')
        //             cy.get('.component-modal-input').eq(4).clear().type('edited')
        //             cy.get('.component-modal-input').eq(5).clear().type('description edited')
        //             cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()

        //             cy.wait(2000)
        //             cy.get('.card-text').eq(i).next().next().click({
        //                 force: true
        //             })
        //             cy.wait(2000)
        //             cy.get('.is-active > .modal-content > :nth-child(4) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange > .component-modal-button-text').click({
        //                 multiple: true,
        //                 force: true
        //             })
        //             cy.wait(3000)

        //         }
        //     })
        // })
        // cy.wait(2000)
        cy.createDepartmentPosition('name', 'Director', 'Director', 'Backend Engineer', 'Backend Engineer')
        cy.get('tbody tr').each((e, i) => {
            cy.get('tbody tr td:nth-child(2)').eq(i).then((el) => {
                if (el.text() == 'name') {
                    cy.get("tbody tr img:nth-child(1)").eq(i).click({
                        force: true
                    })

                    cy.wait(2000)
                    cy.get('.modal-content > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > .component-modal-input').clear().type('edited')
                    cy.get('.modal-content > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(4)').select('Administration')
                    cy.get('.modal-content > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(7)').select('Manager')
                    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px; margin-right: 80px;"] > :nth-child(10)').select('Backend Engineer')
                    cy.get('.form-position > [style="display: flex;"] > [style="width: 380px;"] > .components-add-position-form > [style="width: 90%; height: 92%;"] > [style="display: flex; align-items: center; font-size: 12px;"] > .global-shadow-card > .component-modal-input-dropdown').select('Backend Engineer')
                    cy.wait(1000)
                    cy.get('.is-active > .modal-content > :nth-child(3) > [style="display: flex; margin-top: 56px; margin-bottom: 46px;"] > .orange').click()

                }
            })
        })
        cy.wait(2000)
    })
})