# cypress-end-to-end

### library dependencies
* Run `npm install` to download dependencies.
* In a separate terminal `npm install cypress --save-dev` to install cypress dependencies in package.json

***

### Cypress guided project starter
1. Run the server using `npm start` to start application to be tested. Cypress needs an application to be running in order to be able to test.

* Cypress automated testing with cypress window or execute specific test file.
  1. npx cypress open
  > to run cypress testing in window, creating cypress folder and cypress.json.
  
  2. npx cypress run --spec cypress/integration/form_test.js
  > command line to run specific test file.

***
### Test file
*cypress/integration/form_test.js

***


### Cyprss, mocha, chai
* cypress - end-to-end testing
* mocha - contains the 'describe' and 'it' unit function testing.
* chai - contains the assertion testing.

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

