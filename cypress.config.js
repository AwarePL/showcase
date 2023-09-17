const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      viewportHeight: 1080,
      viewportWidth: 1920,
      specPattern: 'cypress/e2e/**/*',
      grepTags: ''
    },
    setupNodeEvents (on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    }
  }
})
