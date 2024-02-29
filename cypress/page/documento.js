const CAMPO_NOME = '#signer-name-field-test-id';
const OPCAO_NOVO_DOCUMENTO= '#button-create-doc-sidebar-test';
const BOTAO_CONTINUAR = '//*[@id="cdk-step-content-1-0"]/section[2]/aside/div/button';
const BOTAO_CONTINUAR_SIGNATARIO = '#send-document-button-test';
const BOTAO_SALVAR_CONTINUAR = '#save-and-continue-btn-test-first';
const BOTAO_FINALIZAR= '#finish-button-page-share';
const CAMPO_ANEXAR = '#select-files-test';
const OPCAO_SEM_POSICIONAR = '#continue-next-step-test';

class DocumentoPage {

    static digitarNomeSignatario(nome) {
        cy.get(CAMPO_NOME).type(nome);
    }

    static clicarNovoDocumento() {
        cy.get(OPCAO_NOVO_DOCUMENTO).click();
    }

    static anexarDocumento(path) {
        cy.fixture(path, null).as('myFixture')
        cy.get(CAMPO_ANEXAR).selectFile('@myFixture');
    }

    static clicarContinuar() {
        cy.get(BOTAO_CONTINUAR).click();
    }

    static clicarContinuarTelaSignatario() {
        cy.get(BOTAO_CONTINUAR_SIGNATARIO).click();
    }

    static clicarSalvarContinuar() {
        cy.get(BOTAO_SALVAR_CONTINUAR).click();
    }

    static semPosicionarAssinatura() {
        cy.get(OPCAO_SEM_POSICIONAR).click();
    }

    static clicarFinalizar() {
        cy.get(BOTAO_FINALIZAR).click();
    }
}

export default DocumentoPage;