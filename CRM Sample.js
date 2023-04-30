describe('CRM Software Tests', () => {
  beforeEach(() => {
    cy.visit('https://mycrmsoftware.com/')
    cy.get('#username').type('testuser')
    cy.get('#password').type('testpassword')
    cy.get('#login-button').click()
  })

  it('should have a visible title', () => {
    cy.title().should('be.visible')
  })

  it('should be able to add a new lead', () => {
    cy.contains('Leads').click()
    cy.contains('Add Lead').click()
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#phone').type('555-555-5555')
    cy.get('#submit').click()
    cy.contains('Lead added successfully')
  })

  it('should be able to search for a lead', () => {
    cy.contains('Leads').click()
    cy.get('#search-bar').type('John Doe')
    cy.get('#search-button').click()
    cy.contains('John Doe')
  })

  it('should be able to edit a lead', () => {
    cy.contains('Leads').click()
    cy.get(':nth-child(1) > .lead-name').click()
    cy.get('#edit-button').click()
    cy.get('#phone').clear().type('111-111-1111')
    cy.get('#submit').click()
    cy.contains('Lead updated successfully')
  })

  it('should be able to delete a lead', () => {
    cy.contains('Leads').click()
    cy.get(':nth-child(1) > .lead-name').click()
    cy.get('#delete-button').click()
    cy.contains('Are you sure you want to delete this lead?').should('be.visible')
    cy.get('#confirm-delete-button').click()
    cy.contains('Lead deleted successfully')
  })
})
