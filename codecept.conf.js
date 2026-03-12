const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    },
    REST: {
       endpoint:'https://jsonplaceholder.typicode.com'
    },
    JSONResponse:{},
  },
  include: {
    I: './steps_file.js',
    LoginPage: './pages/LoginPage.js',
    ProductPage: "./pages/ProductPage.js",
    CheckoutPage: "./pages/CheckoutPage.js"
  },
  name: 'QA_Automation_Portfolio'
}