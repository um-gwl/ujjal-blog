import 'materialize-css/dist/css/materialize.min.css';
import notfoundImage from  './404-Page.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import reducers from './reducers';
import './css/index.css';

import Login from './component/Login';
import Posts from './component/Posts';
import PostCreate from './component/PostCreate';

import Landing from './component/Landing';
import Dashboard from './component/Dashboard';

import Footer from './component/sections/Footer';
import Header from './component/sections/Header';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const NotFound = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col s12 m12"> &nbsp;</div>
          <div className="col s12 m12">
            <img src={notfoundImage} height={'500'} width={'900'} alt="404 page npt found"/>
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path ="/login" component={Login}/>
        <Route exact={true} path ="/posts" component={Posts}/>
        <Route exact={true} path ="/post/create" component={PostCreate}/>
        <Route exact={true} path ="/dashboard" component={Dashboard}/>
        <Route exact={true} path ="/" component={Landing}/>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();
