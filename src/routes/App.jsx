
/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../container/Login';
import RecoveryPassword from '../container/RecoveryPassword';
import '../styles/Global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='recovery-password' component={RecoveryPassword} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
