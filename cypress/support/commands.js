// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import EntrarPage from "../page/entrar"

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    EntrarPage.visitar();
    EntrarPage.digitarEmail(Cypress.env('email'));
    EntrarPage.digitarSenha(Cypress.env('senha'));
    EntrarPage.clicarEntrar();
    cy.contains('Carregando seus dados...');
    cy.location('href').should('include', '/conta/documentos');
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })