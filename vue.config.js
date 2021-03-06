/* eslint-disable */
//鸵鸟做法  禁止eslink提示  谷歌搜eslink ignore whole file

const path = require('path')
module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end() //只包含icons目录
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end() //extract:false是不需要解析一个文件出来
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{ removeAttrs: { attrs: 'fill' } }] })).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
        config.module.rule('svg').exclude.add(dir) //其他SVG loader排除icons目录
    },
    // // sass-loader
    // // https://vue-loader.vuejs.org/zh/guide/pre-processors.html#sass
    // css: {
    //     extract: false,
    //     sourceMap: true,
    //     loaderOptions: {
    //         sass: {
    //             // https://webpack.docschina.org/loaders/sass-loader/#options
    //             // https://webpack.docschina.org/loaders/sass-loader/#additionaldata
    //             // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    //             additionalData: '@import "~@/assets/style/variables.scss";'
    //         }
    //     }
    // },
}