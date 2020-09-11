describe('App', () => {
  it('App Runs', () => {
    cy.visit('/')
  })

  it('Navigates to articles when clicked and can navigate back to the home page', () => {
    cy.visit('/')
    cy.findAllByTestId('article-card').first().click()
    cy.wait(3000)
    cy.findByTestId('article-header')
    cy.wait(3000)
    cy.findByTestId('homepage').click()
    cy.findAllByTestId('article-card')
  })
})
