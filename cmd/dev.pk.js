let {resolve}          = require('path')
let webpack            = Object.assign(require('webpack'),
  { HtmlPlugin:          require('html-webpack-plugin') })

let context            = resolve('htp/')
let dest               = resolve('htp/cdn/ui/v1')

let publicPath         = `/ui/v1/`
let hmr                = `webpack-hot-middleware/client?reload=true&noInfo=true&path=${publicPath}hmr`
let html               = {
  chunks:             'app', 
  filename:           resolve('pl8/ui')+'/layout.hbs', 
  hash:               true, 
  template:           resolve('pl8/ui')+'/layout.pl8',
  xhtml:              true
}


module.exports       = {

  mode:              'development',

  context,           // home dir for entry + rules.loader

  devtool:           'inline-source-map',

  entry: {
    app:             ['./client', hmr],
  },

  module: {
    rules: [
      // { test: /\.handlebars$/, loader: "handlebars-loader" },
      { test:              /\.less$/,
        // issuer:         /\.less$/,
        include:           context+'/less',
        use: [ {           loader: 'style-loader' } ,
               {           loader: 'css-loader'   } ,
               {           loader: 'less-loader'  } ]
      },
  // { test: /\.(ico|png|svg|jpg|gif)$/, use: ['file-loader'] }
  // { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
    ]
  },

  output: {
    filename:              'js/[name].js',
 // libraryExport: 'default',
 // libraryTarget: 'commonjs2',
    path:                  dest,
    pathinfo:              false,
    publicPath,                       // base path for all assets
  },

  plugins: [               new webpack.HtmlPlugin(html)],

  stats: {
    // all:                   true,
    assets:                true,
    // assetsSort:            string,
    builtAt:               false,
    cached:                true,
    cachedAssets:          true,
    children:              false,
    chunkGroups:           true,
    chunkModules:          true,
    chunkOrigins:          true,
    chunks:                true,
    // chunksSort:            string,
    colors:                true,
    // context:               string,
    depth:                 true,
    entrypoints:           false,
    env:                   true,
    errorDetails:          true,
    errors:                true,
    exclude:               true,
    // excludeAssets:         RegExp,
    // excludeModules:        RegExp,
    hash:                  false,
    // maxModules:            number,
    moduleAssets:          true,
    moduleTrace:           true,
    modules:               true,
    // modulesSort:           string,
    nestedModules:         true,
    optimizationBailout:   true,
    outputPath:            false,
    // performance:           true,
    // providedExports:       true,
    publicPath:            false,
    reasons:               true,
    source:                true,
    timings:               true,
    usedExports:           false,
    version:               false,
    warnings:              true,
    // warningsFilter:        RegExp
  }

}
