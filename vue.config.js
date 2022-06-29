const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        files: [
          "**/*"
        ],
        extraFiles: [
          {
              "from": "src/assets",
              "to": "src/assets",
              "filter": ["**/*"]
          }
        ]
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
