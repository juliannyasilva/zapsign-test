const CAMPO_EMAIL = '#email-redefine-password-test';
const BOTAO_REDEFINIR_SENHA= '#button-redefine-password-test';

class EsqueciSenhaPage {

    static visitar() {
        cy.visit('/acesso/esqueci-minha-senha?lang=pt-br');
    }

    static digitarEmail(email) {
        cy.get(CAMPO_EMAIL).type(email);
    }

    static clicarRedefinirSenha() {
        cy.get(BOTAO_REDEFINIR_SENHA).click();
    }
}

export default EsqueciSenhaPage;