const { defineConfig } = require('cypress')
const secret = require('./secret')
module.exports = defineConfig({
  e2e: {
    env: {
      viewportHeight: 1080,
      viewportWidth: 1920,
      specPattern: 'cypress/e2e/**/*',
      grepTags: '',
      secret
    },
    setupNodeEvents (on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    }
  }
})
