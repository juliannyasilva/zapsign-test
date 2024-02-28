import CriarContaPage from "../page/criar-conta";
import EntrarPage from "../page/entrar";
import EsqueciSenhaPage from "../page/esqueci-minha-senha";
const { faker } = require("@faker-js/faker");

const user = {
    email: faker.internet.email(),
    senha: '!' + faker.internet.password(),
    celular: faker.phone.number()
};

describe('E2E testes da ZapSign', () => {

/*  context('Cadastrar novo usuário', () => {

     it('CT003: Criar uma conta via e-mail com telefone', () => {
        CriarContaPage.visitar();
        CriarContaPage.digitarEmail(user.email);
        CriarContaPage.digitarSenha(user.senha);
        CriarContaPage.digitarTelefone(user.celular);
        CriarContaPage.clicarCriarConta();
        cy.contains('Carregando seus dados...');
        cy.location('href').should('include', '/acesso/ativar-conta');
        cy.get('').should('have.text', 'Ative sua conta');
        cy.get('').should('have.text', 'Insira o código de 6 dígitos que foi enviado para o seu e-mail '+ user.email);
    });
  }), */

  context('Esqueci minha senha', () => {   
    it('CT022: Recuperar uma senha esquecida com sucesso', () => {
      EntrarPage.visitar();
      EntrarPage.cliclarEsqueciMinhaSenha();
      cy.location('href').should('include', '/acesso/esqueci-minha-senha');
      cy.get('h1').should('have.text', 'Redefinir senha');
      EsqueciSenhaPage.digitarEmail(user.email);
      EsqueciSenhaPage.clicarRedefinirSenha();
      cy.get('#msg-success-invite-email-test-id').should('have.text', ' Caso este seja um email de usuário válido, você receberá um link para recuperação da senha via e-mail! ');
    });
  }),

  context('Entrar no app', () => {    
    it('CT016:Acessar uma conta utilizando o email com sucesso', () => {
      EntrarPage.visitar();
      EntrarPage.digitarEmail(Cypress.env('email'));
      EntrarPage.digitarSenha(Cypress.env('senha'));
      EntrarPage.clicarEntrar();
      cy.contains('Carregando seus dados...');
      cy.location('href').should('include', '/conta/documentos');
      cy.get().should('have.text', user.email);
    });
  })
});