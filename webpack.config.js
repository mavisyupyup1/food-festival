const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack")
const path = require('path')


module.exports={
    entry: './assets/js/script.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'main.bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode:"static",//the report outputs to an html file in the dist folder
        })
    ],
    mode:'development'
};