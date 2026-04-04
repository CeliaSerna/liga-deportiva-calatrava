describe('Pruebas E2E', () => {

  beforeEach(() => {
    // 1. Entramos en la página de Login
    cy.visit('http://localhost:4200/login'); 
  });

  it('Caso 1: muestra error con credenciales incorrectas (Conexión real con Node.js)', () => {
    // 2. Escribo datos que NO existen en MongoDB
    cy.get('input[name="usuario"]').type('usuario_falso');
    cy.get('input[name="password"]').type('password_incorrecta');

    // 3. Hacemos clic en el botón de entrar
    cy.get('button[type="submit"]').click();

    // 4. Verificamos que el backend responde con un error 401 (Unauthorized)
    // El mensaje 'Unauthorized' es el que suele devolver Node por defecto.
    cy.contains('Unauthorized').should('be.visible');
  });

  it('Caso 2: Debería entrar correctamente con un usuario real de MongoDB', () => {
    // 1. Escribo los datos de UN USUARIO REAL DE MONGO
    cy.get('input[name="usuario"]').type('Marta'); 
    cy.get('input[name="password"]').type('1234');

    // 2. Pulsamos el botón
    cy.get('button[type="submit"]').click();

    // 3. VERIFICACIÓN DE ÉXITO: 
    // Si al loguearte te redirige a otra página, comprobamos la URL:
    //uso 'include' y no 'eq' poruqe con el metodo get la url añadira los datos del usuario 
    cy.url().should('include', 'http://localhost:4200/rol'); 
    
    // O si sale un mensaje de bienvenida:
    // cy.contains('Bienvenid@').should('be.visible');
  });

});