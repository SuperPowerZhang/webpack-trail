
http-server 在指定目录下生成服务器

bundler_3.ts 是简易打包器的完整代码，是打包的核心原理
dist_2 是其打包后生成的，可以直接运行的

打包使用的是babel-core的功能，把import/export变成能在浏览器上运行的

loaders：css-loader实现了把css转成js代码，并作为style标签塞入document的功能