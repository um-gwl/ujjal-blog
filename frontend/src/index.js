import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import reducers from './reducers';
import './css/index.css';

import Login from './component/Login';
import Landing from './component/Landing';
import Dashboard from './component/Dashboard';

import Footer from './component/sections/Footer';
import Header from './component/sections/Header';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div className='container'>
      <Header/>
      <Switch>
        <Route exact={true} path ="/login" component={Login}/>
        <Route exact={true} path ="/dashboard" component={Dashboard}/>
        <Route exact={true} path ="/" component={Landing}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();
