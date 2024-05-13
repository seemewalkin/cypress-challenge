class EmployerPage {
    selectSubjectButton(subject) { return cy.get('.mat-card-content').contains(subject) }
    continueSubjectButton() { return cy.contains('app-funnel-steps button.mat-flat-button', 'Weiter') }
    selectExperienceButton(experience) { return cy.get('.chip-text').contains(experience) }
    continueLocationButton() { return cy.contains('app-hiring-location-step button.mat-flat-button', 'Weiter') }
    plzInput() { return cy.get('input[id="mat-input-1"]') }
    continueCompanyButton() { return cy.contains('button.mat-flat-button', 'Zum letzten Schritt') }
    companyNameInput() { return cy.get('input[id="mat-input-2"]') }
    firstNameInput() { return cy.get('input[id="mat-input-3"]') }
    lastNameInput() { return cy.get('input[id="mat-input-4"]') }
    emailInput() { return cy.get('input[id="mat-input-5"]') }
    phoneInput() { return cy.get('input[id="mat-input-6"]') }
    finishConsultationButton() { return cy.contains('button.mat-flat-button', 'Kostenlos beraten lassen') }
    bookTerminButton() { return cy.contains('a.mat-flat-button', 'Jetzt Termin vereinbaren') }
    
    fillContactInformation(firstName: string, lastName: string, email?: string, phone?: string) {
        this.firstNameInput().type(firstName);
        this.lastNameInput().type(lastName);
       
        if (email) {
            this.emailInput().clear().type(email)
            this.interceptMailValidation()
        }
        
        if (phone) {
            this.phoneInput().clear().type(phone)
            this.interceptPhoneValidation()
        }
    }

    chooseSubjects(subjects) {
        subjects.forEach(subject => {
            this.selectSubjectButton(subject).click()
        });
    }

    clickContinueButton() {
        this.continueSubjectButton().click()
    }

    chooseExperience(experience) {
        this.selectExperienceButton(experience).click()
    }

    fillLocationInput(location: string) {
        this.plzInput().type(location)
    }

    clickContinueLocationButton() {
        this.continueLocationButton().click()
    }

    fillCompanyInput(companyName: string) {
        this.companyNameInput().clear().type(companyName);
    }

    clickContinueCompanyButton() {
        this.continueCompanyButton().click()
    }

    interceptMailValidation() {
        cy.intercept('GET', '**/validate/email**').as('validateEmail');
        cy.wait('@validateEmail').its('response.body.isValid').should('eq', true);
    }

    interceptPhoneValidation() {
        cy.intercept('GET', '**/validate/phone-number**').as('validatePhoneNumber')
        cy.wait('@validatePhoneNumber').its('response.body.isValid').should('eq', true);
    }

    clickBookConsultationButton() {
        this.finishConsultationButton().click()
    }

    validateConsultationOnboarding() {
        this.bookTerminButton().should('be.visible');
    }
}

export const employerPage: EmployerPage = new EmployerPage()