const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    baseUrl: 'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/specs/*.spec.js'

  },
  retries: {
    runMode: 1
  }
});
