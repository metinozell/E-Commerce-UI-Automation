const { I } = inject();

module.exports = {

  fields: {
    username: '#user-name',
    password: '#password'
  },
  buttons: {
    loginButton: '#login-button'
  },

  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.loginButton);
  }
}
