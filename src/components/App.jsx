
/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/
import React from 'react';
import Layout from '../container/Layout';
import Login from '../container/Login';
import '../styles/Global.scss';

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default App;
