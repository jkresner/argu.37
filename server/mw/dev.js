let dev = x => null


if (config.env == 'dev') {

  let webpack      = require('webpack')
  let pk           = require('../../cmd/dev.pk.js')
  let plugins      = [new webpack.HotModuleReplacementPlugin(),new webpack.NoEmitOnErrorsPlugin()]
  let cfg          = assign({}, pk, {plugins})
  let compiler     = webpack(cfg)
  let {publicPath} = pk.output


  let ops      = {
    wpk: {
      logLevel:          'silent',
      noInfo:            true,
      publicPath,
      stats: {
        assets:          false,
        builtAt:         false,
        children:        false,
        chunkModules:    false,
        chunkOrigins:    false,
        chunks:          false,
        chunksSort:      false,
        entrypoints:     false,
        hash:            false,
        modules:         false,
        timings:         false,
        version:         false
      }
    },
    hpk: {
      path:              `${publicPath}hmr`,
      heartbeat:         10000
    }
  }

  let wpk = require("webpack-dev-middleware")(compiler, ops.wpk)
  let devRL = require("webpack-hot-middleware")(compiler, ops.hpk)

  dev = (app, mw) => {
    app
      .use(wpk)
      .get(ops.hpk.path, devRL)

    return null
  }

}


module.exports = dev
