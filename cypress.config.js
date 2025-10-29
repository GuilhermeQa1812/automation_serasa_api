const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // ✅ novo reporter oficial
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes - Automação Serasa',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/mochawesome-report',
  },

  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    video: false,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // ✅ plugin ativado
      return config;
    },
  },
});
