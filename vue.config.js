const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
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
