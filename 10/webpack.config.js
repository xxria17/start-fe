const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'app.js',
        path: `${__dirname}/dist`,
    },
    devServer: {
        contentBas : './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
};