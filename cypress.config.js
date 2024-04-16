const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    }
  },
  viewportHeight:720,
  viewportWidth:1280
  //defaultCommandTimeout: 10000
});
