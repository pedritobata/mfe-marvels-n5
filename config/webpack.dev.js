const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marvels",
      filename: "remoteEntry.js",
      exposes: {
        "./MarvelsApp": "./src/bootstrap.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        /* react: {
          // react
          singleton: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-dom": {
          // react-dom
          singleton: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        }, */
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
