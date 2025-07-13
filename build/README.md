# 构建系统说明

## 配置文件

-   `webpack.base.config.js`: 基础 webpack 配置
-   `webpack.dev.config.js`: 开发环境配置
-   `webpack.pro.config.js`: 生产环境配置
-   `webpack.config.js`: 主配置文件
-   `babel.config.js`: Babel 转译配置
-   `postcss.config.js`: CSS 后处理配置

## 构建命令

```bash
# 开发模式(带热更新)
npm run dev

# 生产构建
npm run build

# 生产构建并生成分析报告
npm run build:analyze

# 类型检查
npm run type-check
```

## 技术栈

-   Webpack 5
-   TypeScript
-   Babel
-   PostCSS
