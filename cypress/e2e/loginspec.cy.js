describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module[data-v-7b563373=''][data-v-c286b6e5='']").contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('Test123')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']").should('be.visible')
  })  
})  