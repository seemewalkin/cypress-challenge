class LandingPage {
    menuHamburgerButton() { return cy.get('button[aria-label="Menü öffnen"]') }
    forEmployersButton() { return cy.contains('a.mat-button .mat-button-wrapper', 'Für Arbeitgeber') }
    bookConsultationButton() { return cy.contains('button.mat-flat-button', 'Jetzt Beratung vereinbaren') }

    proceedToConsultationOnboarding() {
        this.menuHamburgerButton().click()
        this.forEmployersButton().click({ force: true })
        this.bookConsultationButton().click()
    }
}

export const landingPage: LandingPage = new LandingPage()