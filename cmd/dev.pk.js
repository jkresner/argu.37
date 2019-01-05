let p                = require('path').resolve
let webpack          = require('webpack')
let html             = require('html-webpack-plugin')
let context          = p('htp/_src/')
let dest             = p('htp/cdn/ui/v1')
let publicPath       = `/ui/v1/` //http://localhost:5436
let hmr              = `webpack-hot-middleware/client?path=${publicPath}hmr`


let htmlOps          = name => Object.assign({hash:true,xhtml:true,chunks:'ag'},
  { filename: p(`pl8/ui/${name}.hbs`), template: `ui/${name}.pl8`})


module.exports       = {

  mode:                    'development',

  entry: {
    // lib:             ['./37', hmr],
    ag:              ['./37', hmr],
    // adm:             ['./ad', hmr]
  },

  context,           // home dir for entry + rules.loader

  devtool:                 'inline-source-map',

  module: {
    rules: [

      { test:              /\.less$/,
        // issuer:         /\.less$/,
        include:           context+'/css',
        use: [ {           loader: 'style-loader' } ,
               {           loader: 'css-loader'   } ,
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
    // libraryExport: 'default',
    // libraryTarget: 'commonjs2',
    path:                  dest,
    pathinfo:              false,
    publicPath,                                // base path for all assets
  },

  plugins: [
                           new html(htmlOps('web')),
                           // new html(htmlOps('adm')),
                           new webpack.HotModuleReplacementPlugin(),
                           new webpack.NoEmitOnErrorsPlugin()         ],

  stats: {
    all:                   true,
    assets:                true,
    // assetsSort:            string,
    builtAt:               false,
    cached:                true,
    cachedAssets:          true,
    children:              false,
    chunkGroups:           false,
    chunkModules:          true,
    chunkOrigins:          true,
    chunks:                false,
    // chunksSort:            string,
    colors:                false,
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
    performance:           true,
    providedExports:       true,
    publicPath:            false,
    reasons:               true,
    source:                true,
    timings:               false,
    usedExports:           false,
    version:               false,
    warnings:              true,
    // warningsFilter:        RegExp
  }

}
