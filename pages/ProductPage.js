const { I } = inject();

module.exports = {
  buttons: {
    addToCartButton: '#add-to-cart-sauce-labs-backpack',
    shoppingCartButton:'.shopping_cart_link'
  },

  addBackpackToCart() {
    I.click(this.buttons.addToCartButton);
  },

  goToCart() {
    I.click(this.buttons.shoppingCartButton);
  }

}
