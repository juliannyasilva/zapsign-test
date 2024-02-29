import CriarContaPage from "../page/criar-conta";
import EntrarPage from "../page/entrar";
import EsqueciSenhaPage from "../page/esqueci-minha-senha";
import DocumentoPage from "../page/documento";
const { faker } = require("@faker-js/faker");

describe('E2E testes da ZapSign', () => {

  const user = {
    email: faker.internet.email(),
    senha: '!' + faker.internet.password(),
    celular: faker.phone.number()
  };
  var url_token = '';

  context('Cadastrar novo usuário', () => {
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
  }),

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
  }),

  context('Criar novo documento', () => {    
    const documento = {
      path: 'template.pdf',
      nomeSignatario: faker.person.firstName()
    };
    it('CT016:Acessar uma conta utilizando o email com sucesso', () => {
      cy.login();
      DocumentoPage.clicarNovoDocumento();
      cy.location('href').should('include', '/conta/documentos/novo');
      cy.get('h1').should('have.text', 'Novo documento');
      DocumentoPage.anexarDocumento(documento.path)
      DocumentoPage.clicarContinuar();
      cy.get('h2').should('have.text', 'Quem irá assinar?');
      DocumentoPage.digitarNomeSignatario(documento.nomeSignatario);
      DocumentoPage.clicarContinuarTelaSignatario();
      cy.get('#title-page-positioning-rubrics-test-id').should('have.text', 'Posicione as assinaturas no documento');
      DocumentoPage.semPosicionarAssinatura();
      cy.get('h2').should('have.text', 'Envie o documento');
      cy.get('//*[@id="cdk-step-content-1-3"]/app-page-share-document/div[2]/div/div[2]/div/div/app-signer-input-link/input').should(($input) => {
        url_token = $input.val()
      })
      DocumentoPage.clicarFinalizar();
      cy.contains('Pronto!');
      cy.contains('Documento finalizado e aguardando assinaturas.');
      cy.get('//*[@id="cdk-step-content-1-3"]/app-page-share-document/section/button').should('be.enable');
    });
  }),

  context('Verificar assinatura do documentorece', () => {   
    const signatario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      celular: faker.phone.number()
    };
    it('CT024: Verificar a assinatura do documento', () => {
      VerificarPage.visitar(url_token);
      VerificarPage.clicarContinuar();
      cy.get('h1').should('have.text', 'Confirme sua identidade para assinar o documento');
      VerificarPage.digitarNome(signatario.nome);
      VerificarPage.digitarEmail(signatario.email);
      VerificarPage.digitarTelefone(signatario.celular);
      VerificarPage.clicarContinuar();
      cy.get('h1').should('have.text', 'Por favor, assine abaixo');
      VerificarPage.desenharAssinatura();
      VerificarPage.clicarContinuar();
      cy.contains(' Seu documento está assinado! ');
      cy.contains(' Você receberá uma cópia do documento por e-mail assim que todos tiverem finalizado sua assinatura. ');
    });
  })
});