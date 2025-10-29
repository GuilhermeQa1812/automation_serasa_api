# 🧪 Automação de Testes com Cypress + Mochawesome + GitHub Actions

<div align="center">

![Cypress Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo.png)

✨ Projeto de automação de testes de API utilizando **Cypress**, com relatórios profissionais **Mochawesome** e integração contínua via **GitHub Actions**.

🚀 Totalmente automatizado, moderno e com estrutura escalável.  
Feito com ❤️ por **Guilherme Vargas**

</div>

---

## 📋 **Sumário**

- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🧠 Padrão de Projeto (Design Pattern)](#-padrão-de-projeto-design-pattern)
- [🧾 Execução dos Testes](#-execução-dos-testes)
- [📊 Relatórios Mochawesome](#-relatórios-mochawesome)
- [🤖 Integração Contínua (GitHub Actions)](#-integração-contínua-github-actions)
- [🧱 Estrutura de Pastas](#-estrutura-de-pastas)
- [💡 Autor](#-autor)

---

## ⚙️ **Tecnologias Utilizadas**

| Tecnologia | Descrição |
|-------------|------------|
| 🧪 **Cypress** | Framework principal de automação de testes |
| 📘 **JavaScript (Node.js)** | Linguagem base do projeto |
| 📊 **Mochawesome** | Geração de relatórios profissionais em HTML |
| ☁️ **GitHub Actions** | Pipeline CI/CD automatizado |
| 🧱 **Service Object Pattern** | Estrutura de código escalável e limpa |

---

## 🧠 **Padrão de Projeto (Design Pattern)**

O projeto segue o padrão **Service Object Pattern**, que separa as responsabilidades de forma clara:

📦 **Camadas principais:**
- `requests/` → onde ficam as chamadas de API  
- `utils/` → funções de validação e helpers  
- `commands.js` → registra comandos customizados do Cypress  
- `e2e.js` → inicializa os comandos globais  
- `e2e/api/` → onde ficam os testes automatizados

🧩 **Benefícios:**
- Código limpo e reutilizável  
- Fácil manutenção e escalabilidade  
- Facilidade de integração com pipelines CI/CD

---

## 🧾 **Execução dos Testes**

👉 Para rodar os testes localmente:

```bash
npm run test
