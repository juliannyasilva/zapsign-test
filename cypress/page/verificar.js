const CAMPO_NOME = '#mat-input-3';
const CAMPO_EMAIL= '#mat-input-0';
const BOTAO_CONTINUAR = '/html/body/app-root/div[2]/app-signers/div/app-sign-page-footer/div[1]/div[2]/div[1]/div[2]/zs-button/button';
const CAMPO_TELEFONE = '#mat-input-2';
const CANVAS = '//*[@id="first-panel"]/app-design-signature/div/div/canvas';

class DocumentoPage {

    static visitar(token) {
        cy.visit('/verificar/'+ token);
    }

    static digitarNome(nome) {
        cy.get(CAMPO_NOME).type(nome);
    }

    static digitarEmail(email) {
        cy.get(CAMPO_EMAIL).type(email);
    }

    static clicarContinuar() {
        cy.get(BOTAO_CONTINUAR).click();
    }

    static digitarTelefone(numero) {
        cy.get(CAMPO_TELEFONE).type(numero);
    }

    static desenharAssinatura() {
        cy.get(CANVAS)
        .should('exist')
        .trigger('mousedown', {
        x: 10,
        y: 300,
        force: true,
        eventConstructor: 'MouseEvent',
        })
        .trigger('mousemove', {
        x: 10,
        y: 240,
        force: true,
        eventConstructor: 'MouseEvent',
        })
        .trigger('mouseup', {
        x: 10,
        y: 240,
        force: true,
        eventConstructor: 'MouseEvent',
        });
    }
}

export default DocumentoPage;