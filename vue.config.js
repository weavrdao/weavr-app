module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { esModule: false }))
    config.module
      .rule('svg')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { esModule: false }))
    config.module
      .rule('svg')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { esModule: false }))
    config.module
      .rule('mp4')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { esModule: false }))

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        const transformAssetUrls = options.transformAssetUrls || {}
        return {
          ...options,
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            // ..others
            ...transformAssetUrls,
          },
        }
      });
  }
};