class PageObject {
    getEmailInput() {
        return cy.get('#email-input')
    }

    getPasswordInput() {
        return cy.get('#pass-input')
    }

    getSubmitSignin() {
        return cy.get('#login-btn')
    }

    getCompanyNav() {
        return cy.get(':nth-child(5) > .menu-list > :nth-child(1) > a')
    }

    getPositionClassTab() {
        return cy.get('[href="/company/division"]')
    }

    getCompanyDetailTab() {
        return cy.get('[href="/company"]')
    }

    getDepartmentDetailTab() {
        return cy.get('[href="/company/department"]')
    }

    getPositionClassAddButton() {
        return cy.get('[alt="create"]')
    }

    getFileInput() {
        return cy.get('.component-upload > input')
    }

    getCompanyNameInput() {
        return cy.get(':nth-child(1) > .dashboard-company-underline > .dashboard-company-text-regular')
    }

    getCompanyEmailInput() {
        return cy.get(':nth-child(2) > .dashboard-company-underline > .dashboard-company-text-regular')
    }

    getCompanyAddressInput() {
        return cy.get(':nth-child(3) > .dashboard-company-underline > .dashboard-company-text-regular')
    }

    getCompanyCityInput() {
        return cy.get('.css-10xy7y0-placeholder')
    }

    getCompanyZipInput() {
        return cy.get(':nth-child(5) > .dashboard-company-underline > .dashboard-company-text-regular')
    }
    getCompanyPhoneInput() {
        return cy.get(':nth-child(6) > .dashboard-company-underline > .dashboard-company-text-regular')
    }
    getCompanyFaxInput() {
        return cy.get(':nth-child(7) > .dashboard-company-underline > .dashboard-company-text-regular')
    }
    getSaveProfileButton() {
        return cy.contains('SAVE');
    }

    cashform = {
        pick: () => {
            cy.get('.component-picker-select').select('Cash')
        },
        title: () => {
            return cy.get(':nth-child(1) > .dashboard-company-card-form-user-text');
        },
        coa: () => {
            return cy.get(':nth-child(2) > .dashboard-company-card-form-user-text');
        }
    }

    bankform = {
        title: () => {
            return cy.get(':nth-child(1) > .dashboard-company-card-form-user-text');
        },
        accountName: () => {
            return cy.get(':nth-child(2) > .dashboard-company-card-form-user-text');
        },
        bankName: () => {
            return cy.get('.css-1rbnkf9-control');
        },
        bankNameOption: () => {
            return cy.get('.css-i0syzg-menu');
        },
        accountNumber: () => {
            return cy.get(':nth-child(4) > .dashboard-company-card-form-user-text');
        },
        branch: () => {
            return cy.get(':nth-child(5) > .dashboard-company-card-form-user-text');
        },
        coa: () => {
            return cy.get(':nth-child(6) > .dashboard-company-card-form-user-text');
        },
        addAccount: () => {
            return cy.contains('ADD ACCOUNT')
        }
    }
}


export default PageObject