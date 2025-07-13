const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // 指定入口文件
    entry: "./source/runtime/enter.ts",

    // 开发模式使用，方便查错误
    devtool: "inline-source-map",

    // 配置服务器
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
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
        alias: {
            "@src": path.resolve(__dirname, "../source"),
            "@src/core": path.resolve(__dirname, "../source/core"),
            "@sys": path.resolve(__dirname, "../source/system"),
            "@src/utils": path.resolve(__dirname, "../source/utils"),
            "@router": path.resolve(__dirname, "../source/router"),
            "@runtime": path.resolve(__dirname, "../source/runtime"),
            "@pages": path.resolve(__dirname, "../page"),
            "@dist": path.resolve(__dirname, "../dist"),
            "@assets": path.resolve(__dirname, "../assets"),
            "@lib": path.resolve(__dirname, "../source/lib"),
        },
    },

    // 配置webpack的loader
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },

    // 配置webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./page/index.html",
        }),
    ],
};
