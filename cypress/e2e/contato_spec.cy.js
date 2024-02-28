describe('Formulário de Contato', () => {
    it('Preenche e envia o formulário', () => {
      cy.visit('localhost:3000/contato');
  
      cy.get('[name=nome]').type('Nome de Teste');
      cy.get('[name=telefone]').type('123456789');
      cy.get('[name=email]').type('teste@teste.com');
      cy.get('[name=cidade]').select('Cidade 1');
      cy.get('[name=mensagem]').type('Mensagem de teste');
  
      cy.get('form').submit();
    });
  });