const CAMPO_EMAIL = '#focusEmail';
const CAMPO_SENHA = 'zs-password-input.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix';
const BOTAO_ENTRAR = '.zs_card_register_right_content_button > zs-button > [data-cy]';
const BOTAO_ESQUECI_SENHA = '#forgot-password-test-id';

class EntrarPage {

    static visitar() {
        cy.visit('/acesso/entrar?lang=pt-br');
    }

    static digitarEmail(email) {
        cy.get(CAMPO_EMAIL).type(email);
    }

    static digitarSenha(senha) {
        cy.get(CAMPO_SENHA).type(senha);
    }

    static clicarEntrar() {
        cy.get(BOTAO_ENTRAR).click();
    }

    static cliclarEsqueciMinhaSenha() {
        cy.get(BOTAO_ESQUECI_SENHA).click();
    }
}

export default EntrarPage;