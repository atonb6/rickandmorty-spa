const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "name.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        // Estructura de Babel
        test: /\.js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        exclude: /node_modules/, //Excluimos la carpeta de node modules
        use: {
          loader: "babel-loader", //Utilizar un loader como configuración establecida.
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: "./public/index.html",
        filename: "./index.html",
      },
      new CopyWebpackPlugin({
        patterns: [
          { 
            from: "./src/styles/style.css", 
            to: "" 
          },
        ],
      }),
    ),
  ],
};
