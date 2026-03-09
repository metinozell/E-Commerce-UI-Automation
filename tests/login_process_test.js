Feature('Login Process');

Scenario('Basarili bir sekilde sisteme giris yapilabilmeli',  ({ I, LoginPage }) => {
    I.amOnPage('/');
    LoginPage.login('standard_user', 'secret_sauce');
    I.see('Products');
});
