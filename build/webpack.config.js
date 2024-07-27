const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

(module.exports = (env, argv) => {
    let config = argv.mode === "development" ? devConfig : proConfig;
    return merge(baseConfig, config);
}),
    {
        module: {
            rules: [
                {
                    test: /.ts$/,
                    use: [
                        {
                            loader: "babel-loader",
                            // 设置babel
                            options: {
                                // 设置预定义的环境
                                presets: [
                                    [
                                        // 指定环境的插件
                                        "@babel/preset-env",
                                        // 配置信息
                                        {
                                            // 要兼容的目标浏览器
                                            targets: {
                                                chrome: "58",
                                                ie: "11",
                                            },
                                            // 指定corejs的版本
                                            corejs: "3",
                                            // 使用corejs的方式 "usage" 表示按需加载
                                            useBuiltIns: "usage",
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            loader: "ts-loader",
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
    };
