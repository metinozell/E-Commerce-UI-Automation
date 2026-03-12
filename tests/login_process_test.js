Feature('Login Process');

Scenario('Basarili bir sekilde sisteme giris yapilabilmeli',  ({ I, LoginPage }) => {
    I.amOnPage('/');
    LoginPage.login('standard_user', 'secret_sauce');
    I.see('Products');
});

Scenario('Yanlis sifre ile giris yapilamamali', ({ I, LoginPage }) => {
    I.amOnPage('/');
    LoginPage.login('standard_user', 'wrong_password');
    I.see('Epic sadface: Username and password do not match any user in this service');
});
