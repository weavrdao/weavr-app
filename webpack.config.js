module.exports = {
  module: {
    rules: [
      {
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'static/img',
              esModule: false
            }
          },
        ],
      },
    ],
  },
};