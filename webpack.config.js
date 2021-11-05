const path = require('path');


module.exports = {
    mode: 'development',
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname,'app'),
        },
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader', {loader:'postcss-loader',  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "autoprefixer",
                          {
                            // Options
                          },
                        ],
                        [
                            "postcss-simple-vars",
                            {

                            },
                        ],
                        [
                            "postcss-nested",
                            {

                            },
                        ],
                        [
                          "postcss-import",
                          {

                          },
                      ],
                      [
                        "postcss-mixins",
                        {

                        },
                    ],
                      ],
                    },
                  },
                }
            ],
            },
        ],
    },

};