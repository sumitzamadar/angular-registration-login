import { AngularRegistrationLoginPage } from './app.po';

describe('angular-registration-login App', () => {
  let page: AngularRegistrationLoginPage;

  beforeEach(() => {
    page = new AngularRegistrationLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
