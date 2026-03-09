Feature('E2E Cart Process');

Scenario('Kullanici sepete basariyla urun ekleyip satin alimi tamamlayabilmeli', ({ I, LoginPage, ProductPage, CheckoutPage }) => {
    I.amOnPage('/');
    LoginPage.login('standard_user', 'secret_sauce');
    ProductPage.addBackpackToCart();
    ProductPage.goToCart();
    CheckoutPage.startCheckout();
    CheckoutPage.fillShippingInfo('John', 'Doe', '12345');
    CheckoutPage.completeOrder();
    I.see('Thank you for your order!');
});