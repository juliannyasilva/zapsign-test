# Casos de testes do software ZapSign

## Testes funcionais

### Criar conta

CT001: Criar uma conta via google account

CT002: Criar uma conta via SAML SSO

CT003: Criar uma conta via e-mail com telefone

CT004: Criar uma conta via e-mail e sem telefone
Pre-condicao: Acessar a tela /acesso/criar-conta
Passos:
1. Digitar no campo 'E-mail' um valor de email válido
2. Digitar no campo 'Senha' um valor de senha válida
3. Clicar no botao 'Criar conta grátis'
Resultado Esperado: Deve mostrar uma mensagem 'Carregando seus dados...', Redirecionar o usuário para a tela '/acesso/ativar-conta', Exibir o titulo 'Ative sua conta' e a mensagem 'Insira o código de 6 dígitos que foi enviado para o seu e-mail {email_informado}'

CT005: Criar uma conta via facebook

CT006: Criar uma conta via linkedin

CT007: Criar uma conta via outlook account

CT008: Criar uma conta aceitando os termos de uso e a politica de privacidade

CT009: Criar uma conta aceitando querer receber atuailizacoes da plataforma por e-mail

CT010: Criar uma conta sem aceitar os termos de uso e a politica de privacidade

CT011: Criar uma conta sem aceitar querer receber atuailizacoes da plataforma por e-mail

CT012: Criar uma conta aceitando os termos de uso e a politica de privacidade e receber atuailizacoes da plataforma por e-mail

CT013: Informar uma senha sem conter uma letra maiuscula e minuscula

CT014: Informar uma senha sem contar um caractere especial

CT015: Informar uma senha sem conter 12 caracteres

CT016: Informar uma senha sem conter numero 0-9

CT017: Mostrar a senha digitada

### Entrar (Logar no sistema)

CT018: Acessar uma conta utilizando o email com sucesso

Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Digitar no campo 'E-mail' um valor de email já cadastrado no sistema
2. Digitar no campo 'Senha' um valor de senha já cadastrada no sistema
3. Clicar no botao 'Entrar'
Resultado Esperado: Deve mostrar uma mensagem 'Carregando seus dados...', Redirecionar o usuário para a tela '/conta/documentos' e exibir o email informado na navbar.

CT019: Acessar uma conta utilizando o provedor google com sucesso
Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Clicar no botao 'Continue with Google'
2. Deve abrir a janela 'Sign In - Google Accounts'
3. Escolher a conta desejada
4. Autenticar no google account
5. Deve fechar a janela 'Sign In - Google Accounts'
6. Redirecionar o usuário para a tela '/acesso/entrar' da ZapSign
Resultado Esperado: Deve mostrar uma mensagem 'Carregando seus dados...', Redirecionar o usuário para a tela '/conta/documentos' e exibir o email informado na navbar.

CT020: Acessar uma conta utilizando um SSO com sucesso
Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Clicar no botao 'Continuar com SAML SSO'
2. Deve redirecionar o usuario para a tela '/acesso/saml-login'
3. Deve conter o titulo 'SAML single sign-on (sso)'
4. Digitar no campo 'ID de login' um valor de id já cadastrado no sistema
5. Clicar no botao 'Continuar'
Resultado Esperado: Redirecionar o usuário para a tela '/conta/documentos' e exibir o ID informado na navbar.

CT021: Tentar acessar uma conta com um email inválido
Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Digitar no campo 'E-mail' um valor de email nao cadastrado no sistema
2. Digitar no campo 'Senha' um valor de senha já cadastrada no sistema
3. Clicar no botao 'Entrar'
Resultado Esperado: Deve mostrar uma mensagem 'Carregando seus dados...', e exibir a mensagem ' A senha parece incorreta. Você esqueceu sua senha? '

CT022: Tentar acessar uma conta com a senha invalida
Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Digitar no campo 'E-mail' um valor de email já cadastrado no sistema
2. Digitar no campo 'Senha' um valor de senha nao cadastrada no sistema
3. Clicar no botao 'Entrar'
Resultado Esperado: Deve mostrar uma mensagem 'Carregando seus dados...', e exibir a mensagem ' A senha parece incorreta. Você esqueceu sua senha? '

CT023: Mostrar a senha digitada
Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Digitar no campo 'Senha' um valor de senha qualquer
2. Clicar no botao 'Icone de olho ocultado'
Resultado Esperado: Exibir a senha informada no campo 'Senha' sem ocultacao do real valor

### Recuperar senha (Esqueci minha senha)

CT024: Recuperar uma senha esquecida com sucesso

Pre-condicao: Acessar a tela /acesso/entrar
Passos:
1. Clicar no botao 'Esqueci minha senha'
2. Deve redirecionar para a tela '/acesso/esqueci-minha-senha'
3. Deve conter o titulo 'Redefir senha'
4. Digitar no campo 'E-mail' o valor de e-mail ja cadastrado no sistema
5. Clicar no botao 'Redefir senha'
Resultado Esperado: Exibir a mensagem ' Caso este seja um email de usuário válido, você receberá um link para recuperação da senha via e-mail! '

### Criar novo documento

CT025: Criar um novo documento

Pre-condicao: Acessar a tela /conta/documentos
Passos:
1. Clicar na opcao 'Criar documento'
2. Deve redirecionar para a tela '/conta/documentos/novo'
3. Deve conter o titulo 'Novo documento'
4. Anexar um documento do tipo PDF
5. Clicar no botao 'CONTINUAR'
6. Deve redirecionar para a tela com titulo 'Quem irá assinar?'
7. Digitar o nome do signatario no campo 'Nome do signatário'
8. Clicar no botao 'CONTINUAR'
9. Deve redirecionar para a tela com titulo 'Posicione as assinaturas no documento'
10. Clicar no local que deseja posiciar a assinatura
11. Clicar em posicionar
12. Clicar no botao 'Salvar e continuar'
13. Deve redirecionar para a tela com titulo 'Envie o documento'
14. Clicar no botao 'FINALIZAR'
Resultado Esperado: Deve redirecionar para a tela com titulo 'Pronto! e exibir a mensagem 'Documento finalizado e aguardando assinaturas.' e o botao 'VER DOCUMENTO' habilitado

### Verificar assinatura do documento

CT026: Verificar a assinatura do documento

Pre-condicao: Ter o link de um documento criado na zapsign
Passos:
1. Informar a url do documemento '/verificar/{token_do_documento}' no navegador
2. Teclar o botao 'Enter' do teclado
3. Deve redirecionar o usuario para a tela da zapsign
4. Deve exibir o documento carregado
5. Clicar no botao 'Continuar'
6. Deve redirecionar para a tela com titulo 'Confirme sua identidade para assinar o documento'
7. Digitar no campo 'Nome completo' um valor de um nome válido
8. Digitar no campo 'E-mail' um valor de um e-mail válido
9. Digitar no campo 'Celular' um valor de celular válido
10. Clicar no botao 'Continuar'
11. Deve redirecionar para a tela com titulo 'Por favor, assine abaixo'
12. Desenhar uma assinatura no campo correspondente
13. Clicar no botao 'Finalizar'
Resultado Esperado: Deve redirecionar o usuario para a tela 'Seu documento está assinado!', exibir a mensagem 'Você receberá uma cópia do documento por e-mail assim que todos tiverem finalizado sua assinatura.' e mostrar o botao 'Baixar documento assinado' habilitado.


## Testes nao-funcionais

### Criar documento

CT027: Criar um documento pelo endpoint


### Criar documento via modelo

CT028: Criar um documento via modelo pelo endpoint


### Posicionar assinaturas

CT029: Posicionar assinaturas pela endpoint


### Logs de webhooks

CT030: Acompanhar os logs dos webhooks enviados pela ZapSign nos últimos 7 dias