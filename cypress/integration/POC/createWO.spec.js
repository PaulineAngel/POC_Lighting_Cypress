describe('First test', () =>{
    it('Just it', () =>{
        cy.visit('https://login.salesforce.com/?locale=br')
        
        cy.get('#username')
        .click()
        .type('pauline_angel@dellservices.dev1')

        cy.get('#password')
        .click()
        .type('Pp81712180@')
        
        cy.get('[type=submit]')
        .click()
        .next()
    })
})


