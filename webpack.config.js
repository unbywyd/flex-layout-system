// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    index: "./src/index.ts",
    base: "./src/base.ts",
    full: "./src/full.ts",
    "css-responsive": "./src/css-responsive.ts",
    "js-responsive": "./src/js-responsive.ts",
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
    open: true,
    static: [
      {
        directory: __dirname,
        serveIndex: true,
        watch: true,
      }
    ],
    compress: true,
    liveReload: true,
    port: 9002,
    host: '127.0.0.1'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
  },
  plugins: [
    ...(isProduction ? [new MiniCssExtractPlugin({
      filename: "[name].min.css",
      chunkFilename: "[id].min.css",
      ignoreOrder: false,
    })] : [])
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
            },
          },
          "ts-loader",
        ],
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [!isProduction ? "style-loader" : stylesHandler, "css-loader", "postcss-loader", "sass-loader"], // , 
      },
      {
        test: /\.css$/i,
        use: [!isProduction ? "style-loader" : stylesHandler, "css-loader", "postcss-loader"], // "style-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      }
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".js"],
    alias: {
      appConfig: path.join(__dirname, 'config', isProduction ? 'prod' : 'dev')
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }

  return config;
};
