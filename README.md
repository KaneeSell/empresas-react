# Empresas-React

Este é um projeto desenvolvido em **React** utilizando **Bootstrap**, **Vite**, **ESLint** e **TypeScript**. O projeto conta com um sistema simples de cadastro de empresas e uma tela de planilhas para download.

## 🚀 Tecnologias Utilizadas

- **React** (Biblioteca principal)
- **Bootstrap** (Estilização responsiva)
- **Vite** (Compilador rápido para desenvolvimento)
- **ESLint** (Padronização de código)
- **TypeScript** (Tipagem estática)
- **JSON-Server** (Simulação de API)

## 📌 Como Rodar o Projeto

### 📂 Clonar o Repositório

```sh
git clone https://github.com/KaneeSell/empresas-react.git
cd empresas-react
```

### 📦 Instalar Dependências

```sh
npm install
```

### ▶️ Rodar o Projeto em Desenvolvimento (React + JSON-Server)

```sh
npm run dev
```
### JSON-Server rodando na porta 5000
**Para mudar:** `src/api/server.js` **Mudar PORT(Opicional)**

### Vite Rodando na porta 8000
**Para mudar:** `package.json => "scripts" => "dev:vite" => mude 8000`**(Opicional)**

### 🔧 Outras Opções de Execução

- **Rodar apenas o JSON-Server:**
  ```sh
  npm run dev:json
  ```
- **Rodar apenas o modo de desenvolvimento do Vite:**
  ```sh
  npm run dev:vite
  ```
- **Gerar o build para produção:**
  ```sh
  npm run build
  ```

## ✨ Funcionalidades do Projeto

### 🔑 **Tela de Login**

- Apenas visual, sem backend.
- Validação simples: **usuário = "admin", senha = "admin"**.

### 📌 **Menu Lateral**

- Totalmente responsivo para todos os dispositivos.
- Permite navegação entre as telas do sistema.

### 🏢 **Tela de Empresas**

- Listagem das empresas cadastradas no `db.json`.
- Opção de **editar** ou **excluir** empresas.
- Exibição em **cards responsivos**.
- **Botão de Cadastro** de empresas:
  - Validação de **CNPJ**.
  - Máscara para formatação correta do CNPJ.

### 📂 **Tela de Planilhas**

- Apenas visual, exibe **botões de download**.
- Não possui funcionalidade real de download.

### 📱 **Responsividade**

- Todas as telas adaptadas para **desktops, tablets e dispositivos móveis**.


---

Desenvolvido por [Kane'e Sell](https://github.com/KaneeSell).
