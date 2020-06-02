describe('first test should fail', ()=> {
    it('should return true', ()=> {
        expect(true).to.equal(true);
    });
});

describe('Testing our form inputs', ()=>{
    beforeEach( ()=> {
        // refresh the test page
        cy.visit('http://localhost:3000/')
    })

    it('Find the Name input', ()=>{
        //Arrange - get the element
        //Act - mimic user input/interaction
        //Assert - test/verify
        // cy.pause()   // enable gui steps through
        cy.get('[for="name"] > input')
            .type('tony')
            .should('have.value','tony')
            .clear();
        cy.contains('Name is a required field');

        cy.get('input[type="checkbox"]').check().should('be.checked');
    })
});