const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.join(__dirname, "src/assets/style")
      }
    },
    module: {
      rules: []
    }
  }
};
