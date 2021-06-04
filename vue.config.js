module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.module
      .rule('png')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => Object.assign(options, { esModule: false }));

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