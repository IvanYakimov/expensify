// entry --> output
const path = require('path');

module.exports = {
    entry: './src/playground/redux-expensify.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx$/,
            exclude: /node_modules/,
        }, 
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }, 
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};

// loader