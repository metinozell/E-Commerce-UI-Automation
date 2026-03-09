const { I } = inject();

module.exports = {

  fields: {
    firstName: '#first-name',
    lastName: '#last-name',
    postalCode: '#postal-code'
  },

  buttons: {
    checkoutButton:'#checkout',
    continueButton: '#continue',
    finishButton:'#finish'
  },

  startCheckout() {
    I.click(this.buttons.checkoutButton);
  },

  fillShippingInfo(firstName, lastName, postalCode) {
    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.lastName, lastName);
    I.fillField(this.fields.postalCode, postalCode);
    I.click(this.buttons.continueButton);
  },

  completeOrder() {
    I.click(this.buttons.finishButton);
  }
}
