# cypress-end-to-end
> Cypress guided project starter

- [ ] **In the root of this directory**: Run `npm install` to download dependencies.
- [ ] Run the server using `npm start` to start application to be tested. 
- [ ] In a separate terminal `npm install cypress --save-dev` to install cypress dependencies in package.json

1. npx cypress open
> to run cypress testing in window, creating cypress folder and cypress.json.
  
2. npx cypress run --spec cypress/integration/form_test.js
> command line to run specific test file.

***

### Cyprss, mocha, chai
cypress - end-to-end testing
mocha - contains the 'describe' and 'it' unit function testing.
chai - contains the assertion testing.

***

## Best Practices to write cypress tests

Selector | Recommended | Notes
--- | --- | ---
cy.get(‘button’).click() |	❌Never |	Worst - too generic, no context.
cy.get(‘.btn.btn-large’).click() |	❌Never |	Bad. Coupled to styling. Highly subject to change.
cy.get(‘#main’).click() |	⚠️Sparingly |	Better. But still coupled to styling or JS event listeners.
cy.get(‘[name=submission]’).click() |	⚠️Sparingly |	Coupled to the name attribute which has HTML semantics.
cy.contains(‘Submit’).click() |	✅Depends |	Much better. But still coupled to text content that may change.
cy.get(‘[data-cy=submit]’).click() |	✅Always |	Best. Isolated from all changes.

