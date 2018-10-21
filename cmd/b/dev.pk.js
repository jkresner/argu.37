let p                = require('path').resolve
let webpack          = require('webpack')
let html             = require('html-webpack-plugin')
let context          = p('htp/_src/')
let dest             = p('htp/cdn/ui/v1')
let publicPath       = `/ui/v1/` //http://localhost:5436
let hmr              = `webpack-hot-middleware/client?path=${publicPath}hmr`


module.exports       = {

  mode:                    'development',

  entry: {
    ag:                    ['./37', hmr],
    // adm:                ['./ad', hmr]
  },

  context,           // home dir for entry + rules.loader

  devtool:                 'inline-source-map',

  module: {
    rules: [

      { test:              /\.less$/,
        // issuer:         /\.less$/,
        include:           context+'/css',
        use: [            'style-loader',
               {           loader: 'css-loader'   },
               {           loader: 'less-loader'  } ]
      },

      { test:        /\.(ico|png|svg|jpg|gif)$/, use: ['file-loader'] }

  //  {  test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
  //  {  test: /\.(csv|tsv)$/, use: ['csv-loader'] }
  //  {  test: /\.xml$/, use: ['xml-loader'] }

    ]
  },

  output: {
    filename:              '[name].js',
    path:                  dest,
    pathinfo:              false,
    publicPath,                                // base path for all assets
  },

  plugins: [
                           new html({         // title: '{{html.Title}}',
                             filename:      p('pl8/ui/web.hbs'),
                             template:      `ui/web.pl8`,
                             hash:          true,
                             xhtml:         true    }),
                           new webpack.HotModuleReplacementPlugin(),
                           new webpack.NoEmitOnErrorsPlugin()
  ],

  stats: {
    all:                   false,
    assets:                false,
    // assetsSort:            string,
    builtAt:               false,
    cached:                false,
    cachedAssets:          false,
    children:              false,
    chunkGroups:           false,
    chunkModules:          false,
    chunkOrigins:          false,
    chunks:                false,
    // chunksSort:            string,
    colors:                false,
    // context:               string,
    depth:                 false,
    entrypoints:           false,
    env:                   false,
    errorDetails:          false,
    errors:                false,
    exclude:               false,
    // excludeAssets:         RegExp,
    // excludeModules:        RegExp,
    hash:                  false,
    // maxModules:            number,
    moduleAssets:          false,
    moduleTrace:           false,
    modules:               false,
    // modulesSort:           string,
    nestedModules:         false,
    optimizationBailout:   false,
    outputPath:            false,
    performance:           false,
    providedExports:       false,
    publicPath:            false,
    reasons:               false,
    source:                false,
    timings:               false,
    usedExports:           false,
    version:               false,
    warnings:              false,
    // warningsFilter:        RegExp
  }

}
