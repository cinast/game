const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
module.exports = merge(base, {
    // 指定入口文件
    entry: "./source/runtime/enter.ts",

    // // // 开发模式使用，方便查错误
    devtool: "inline-source-map",

    // 配置服务器
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
            watch: true,
        },
        compress: true,
        // port: 9090,
    },

    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false, // 关闭webpack的箭头函数，可选
        },
    },

    // 用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"],
    },

    // 配置webpack的loader
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
        ],
    },

    // // 配置webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./page/index.html",
        }),
    ],
});
