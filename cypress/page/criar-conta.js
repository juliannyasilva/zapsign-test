const CAMPO_EMAIL = '#focusEmail';
const CAMPO_SENHA = 'zs-password-input.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix';
const CAMPO_TELEFONE = '.phone-number > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
const BOTAO_CRIAR_CONTA = '.zs_card_register_right_content_button > zs-button > [data-cy]';

class CriarContaPage {

    static visitar() {
        cy.visit('/acesso/criar-conta?lang=pt-br', { failOnStatusCode: false });
    }

    static digitarEmail(email) {
        cy.get(CAMPO_EMAIL).type(email);
    }

    static digitarTelefone(celular) {
        cy.get(CAMPO_TELEFONE).type(celular);
    }

    static digitarSenha(senha) {
        cy.get(CAMPO_SENHA).type(senha);
    }

    static clicarCriarConta() {
        cy.get(BOTAO_CRIAR_CONTA).click();
    }
}

export default CriarContaPage;