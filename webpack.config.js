module.exports = {
    entry: './app.js',
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    }
};
