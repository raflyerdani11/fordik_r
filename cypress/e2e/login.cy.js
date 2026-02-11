describe('Login Flow (CI Safe)', () => {
  it('should login based on input credentials', () => {
    cy.intercept('POST', '**/login', (req) => {
      const { email, password } = req.body;

      if (email === 'qazqaz@qazqaz.com' && password === 'qazqazqaz') {
        req.reply({
          statusCode: 200,
          body: {
            token: 'fake-token',
            user: { email },
          },
        });
      } else {
        req.reply({
          statusCode: 401,
          body: {
            message: 'email or password is wrong',
          },
        });
      }
    }).as('login');
    //
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="EMAIL"]').type('qazqaz@qazqazzxc.com');
    cy.get('input[placeholder="KATA SANDI"]').type('qazqazqaz');

    cy.contains('Login').click();

    cy.wait('@login');

    cy.location('pathname').should('eq', '/');
  });
});
