/*  1- requerimos path para manejar las rutas y saber donde estamos, este modulo ya viene con node.js
    2- requerimos o instanciamos los plugin que instalemos.
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* creamos un nuevo modulo que vamos a exportar con esta configuracion */

module.exports = {
  //entrada
  entry: './src/index.js',

  /*aqui es donde vamos a guardar nuestros archivos resultantes, cuando hagamos la compilacion*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  /* aqui vamos a resolver las extenciones que vamos a utilizar para el proyecto*/

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  /*ahora vamos a crear un modulo con las reglas necesarias para el proyecto, para que los archivos sean leidos
    debemos recordar que hay que implementar expresiones regulares.
    */

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },

  /*aqui vamos a añadir los plugins que necesitemos, instanciandolos*/
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],

};
