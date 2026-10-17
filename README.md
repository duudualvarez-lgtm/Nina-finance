# Nina Finanças

App da Nina pra instalar no celular sem App Store. Funciona offline e guarda os dados no próprio aparelho.

## O que tem nesta pasta

- `index.html`: o app inteiro
- `manifest.webmanifest`: nome e ícone do app na tela de início
- `sw.js`: faz o app abrir sem internet e se atualizar sozinho
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`: os ícones

**Não coloque o arquivo de backup (`nina-backup-....json`) aqui.** O site do GitHub fica público, e o backup tem os seus dados.

## 1. Subir no GitHub

1. Crie uma conta em github.com, se ainda não tiver.
2. Clique em **New repository**. Nome: `nina`. Deixe **Public** (o GitHub Pages grátis precisa disso). Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**.
4. Arraste **todos os arquivos desta pasta** (são 8). Clique em **Commit changes**.
5. Vá em **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e clique em **Save**.
6. Espere 1 ou 2 minutos. O link do app vai ser:
   https://duudualvarez-lgtm.github.io/Nina-finance/

## 2. Instalar no iPhone

1. Abra o link no **Safari** (tem que ser o Safari).
2. Toque em **Compartilhar** (quadrado com a seta pra cima).
3. Toque em **Adicionar à Tela de Início** e depois em **Adicionar**.
4. A partir de agora, abra a Nina **pelo ícone** na tela de início.

No Android: abra no Chrome, toque nos três pontinhos e em **Instalar app**.

## 3. Trazer os seus dados

1. Mande o arquivo `nina-backup-....json` pro celular (AirDrop, e-mail pra você mesmo, ou iCloud Drive).
2. Na Nina, toque na engrenagem **⚙️ → Importar backup** e escolha o arquivo.

## 4. Ligar a inteligência (opcional)

Sem ela, a Nina entende o jeito simples: `45 gasolina van`, `recebi 2500 da ABC`, `saldo`, `hoje`, `contas`.
Com ela, entende qualquer frase, responde perguntas e tem memória.

1. Entre em console.anthropic.com e crie uma conta.
2. Em **Billing**, coloque crédito (o uso normal da Nina custa poucos centavos por dia).
3. Em **API Keys**, clique em **Create Key** e copie a chave (começa com `sk-ant-`).
4. Na Nina: **⚙️ → Chave da API → cole → Salvar chave**.

A chave fica salva só no seu celular. Nunca coloque a chave nos arquivos do GitHub.

## 5. Avisos de contas

Em **⚙️ → Ativar avisos**. Quando você abrir a Nina e tiver conta vencendo em até 2 dias (ou atrasada), aparece um aviso no celular, uma vez por dia.
No iPhone só funciona com a Nina instalada na tela de início.

## Importante

- Os dados ficam **só no aparelho**. Baixe um backup de vez em quando em **⚙️ → Baixar backup** ou no atalho **💾 Backup**.
- Pra atualizar o app, suba de novo os arquivos novos no GitHub por cima dos antigos. Seus dados não são apagados.
