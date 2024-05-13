/// <reference types = "Cypress" />
import { employerPage } from "../pages/employerPage"
import { landingPage } from "../pages/landingPage"
import { userContactInformation, urls }  from '../fixtures/testdata';

describe('Employer', () => {
    beforeEach(() => {
        cy.viewport('iphone-x')
        cy.intercept('POST', '**/mixpanel/events/page-view').as('pageViewRequest');
        cy.visit('/')
        cy.wait('@pageViewRequest')
      })

    it('can arrange consultation', () => {
        const testData = userContactInformation['user1'];

        landingPage.proceedToConsultationOnboarding()
        // cy.assertUrlContains(urls.salaryOverview)

        employerPage.chooseSubjects(testData.subjects)
        employerPage.clickContinueButton()
        // cy.assertUrlContains(urls.salaryCheck)
        
        employerPage.chooseExperience(testData.experience)
        employerPage.fillLocationInput(testData.location)
        employerPage.fillCompanyInput(testData.companyName)
        employerPage.clickContinueCompanyButton()
        employerPage.fillContactInformation(testData.firstName, testData.lastName, testData.email, testData.phone);
        employerPage.clickBookConsultationButton()
        employerPage.validateConsultationOnboarding()
        // cy.assertUrlContains(urls.appointmentBooking)
    })
})