# cypress-end-to-end
Cypress guided project starter

- [ ] **In the root of this directory**: Run `npm install` to download dependencies.
- [ ] Run the server using `npm start` to start application to be tested. 
- [ ] In a separate terminal `npm install cypress --save-dev` to install cypress dependencies in package.json

npx cypress open, to run cypress testing in window, creating cypress folder and cypress.json.

npx cypress run --spec cypress/integration/form_test.js //command line test 

cypress - end-to-end testing
mocha - contains the 'describe' and 'it' unit function testing.
chai - contains the assertion testing.

Best Practices
The following cheat sheet of best targeting elements is taken directly from the Cypress documentation. It is rare to get this kind of best practice guidance directly from the developers of a language; it gives us insight into the best way to write our tests.

Selector	Recommended	Notes
cy.get(‘button’).click()	❌Never	Worst - too generic, no context.
cy.get(‘.btn.btn-large’).click()	❌Never	Bad. Coupled to styling. Highly subject to change.
cy.get(‘#main’).click()	⚠️Sparingly	Better. But still coupled to styling or JS event listeners.
cy.get(‘[name=submission]’).click()	⚠️Sparingly	Coupled to the name attribute which has HTML semantics.
cy.contains(‘Submit’).click()	✅Depends	Much better. But still coupled to text content that may change.
cy.get(‘[data-cy=submit]’).click()	✅Always	Best. Isolated from all changes.
