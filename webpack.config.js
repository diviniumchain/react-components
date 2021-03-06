const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/components/index.tsx',
  mode: 'production',
  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin('./dist'),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.svg$/,
        use: function ({ realResource }) {
          const loaders = [];

          let ext = realResource.split('.');
          ext = ext[ext.length - 1];

          if (['css', 'scss'].indexOf(ext) > -1) {
            loaders.push({
              loader: 'file-loader',
              options: {
                name: '/assets/svg/[name].[ext]'
              }
            });
          } else {
            loaders.push({ loader: 'raw-loader' });
          }

          return loaders;
        }
      },
      {
        test: /\.(png|jpg|jpeg|bmp|gif)$/,
        loader: 'url-loader',
        options: {
          limit: "10000",
          name: "assets/images/[name].[ext]"
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom",
    "react-router-dom": "react-router-dom"
  },
};
