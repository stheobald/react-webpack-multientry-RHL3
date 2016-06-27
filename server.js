var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    proxy: {
      '/customer/*': {
        bypass: function (req, res, proxyOptions){
          return '/customer';
        }
      },
      "*": "http://localhost:3000",
    },
}).listen(3001, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3001');
});