import { getGreeting } from '../support/app.po';

describe('build-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to build-test!');
  });
});
