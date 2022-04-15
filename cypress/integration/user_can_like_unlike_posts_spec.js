const webHelper = require('../support/web_helpers.js');

describe('likes', () => {
  it('can like a post', () => {
    webHelper.signUp();
    webHelper.signIn();
    webHelper.submitPost();

    // Like post
    cy.get('.likeUnlike:nth(0)').click();
    cy.get('.likeUnlike:nth(0)').should('have.value', 'Unlike')

    // Unlike a post
    cy.get('.likeUnlike:nth(0)').click();
    cy.get('.likeUnlike:nth(0)').should('have.value', 'Like')
 }); 
});