// Este arquivo é carregado automaticamente em TODOS os testes no Cypress 15
import './commands';
import 'cypress-mochawesome-reporter/register';


// (Opcional) Log detalhado de falhas para depurar linha exata
Cypress.on('fail', (error) => {
  console.error('Falha detectada:', error.message);
  throw error;
});
