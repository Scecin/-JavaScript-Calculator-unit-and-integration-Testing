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

  it('should be able to add two numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '5')
  })

  it('should be able to substract two numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '5')
  })

  it('should be able to multiply two numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '18')
  })

  it('should be able to divide two numbers', () => {
    cy.get('#number1').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '4')
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

  it('should be able to show positive numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '1')
  })

  it('should be able to show negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();


    cy.get('.display').should('contain', '-2')
  })
  
  it('should be able to show decimals numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2.5')
  })

  it('should be able to show very large numbers', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '566102750404')
  })

  it('should be able to run in exceptional ciscumstances', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'You cannot divide by zero')
  })
})