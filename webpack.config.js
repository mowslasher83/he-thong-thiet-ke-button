const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/index.js',
    output: {
        // Output file configuration
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // Rule for JavaScript and JSX files
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                // Rule for CSS files
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        // Resolve file extensions
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // Configuration for the development server
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000 // Port for the dev server
    }
};