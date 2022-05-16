describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('shoul be able to update the display the number buttons of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number8').click();

    cy.get('#running-total').should('contain', '218')
  })

  it('shoul be able to update the display the arithmetical operations with the result of the operation', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();

    cy.get('.display').should('contain', '12')
  })

  it('shoul be able to chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '12')
  })

  it('should be able to sow positive, negative, decimals and very large numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-3.4')
  })

  it('should be able to run in exceptional ciscumstances', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'You cannot divide by zero')
  })
})