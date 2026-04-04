describe('Pruebas E2E de Login (Simuladas para CI)', () => {

  beforeEach(() => {
    // 1. Entramos en la página de Login
    cy.visit('/login'); 
  });

  it('Caso 1: muestra error con credenciales incorrectas', () => {
   //1 Interceptamos la llamada al backend y devolvemos un error 401 (Unauthorized)
    cy.intercept('POST', '**/api/login', {
      statusCode: 401,
      body: { message: 'Unauthorized' }
    }).as('loginFail');
    
    cy.get('input[name="usuario"]').type('usuario_falso');
    cy.get('input[name="password"]').type('password_incorrecta');
    cy.get('button[type="submit"]').dblclick(); //Hacemos doble clic en el botón de entrar

    // Esperamos a que la petición ocurra
    cy.wait('@loginFail');
    // Verificamos el error 401 (Unauthorized)
    cy.contains('incorrectos', { matchCase: false }).should('be.visible');
  });

  it('Caso 2: Debería entrar correctamente con un usuario simulado', () => {
  // 2 Interceptamos la llamada y devolvemos un TOKEN falso exitoso
    cy.intercept('POST', '**/api/login', {
      statusCode: 200,
      body: { 
        token: 'token-falso-de-prueba',
        user: { nombre: 'Admin', rol: 'admin' }
      }
    }).as('loginSuccess');    

    cy.get('input[name="usuario"]').type('Marta'); 
    cy.get('input[name="password"]').type('1234');
    cy.get('button[type="submit"]').click(); //Pulsamos el botón

    // Esperamos a la respuesta exitosa
    cy.wait('@loginSuccess');

    // Si al loguearte te redirige a otra página, comprobamos la URL:
    cy.url().should('include', '/rol'); 
    
    // O si sale un mensaje de bienvenida:
    // cy.contains('Bienvenid@').should('be.visible');
  });

});