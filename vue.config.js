const path = require("path");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  },
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
