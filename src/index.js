import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/data'
import AuthContextProvider from './context/auth-context'
import SeriesContextProvider from './context/series-context'

const composeEnhancers=process.env.NODE_ENV === 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null||compose

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const app=(
  <AuthContextProvider>
    <SeriesContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>
    </SeriesContextProvider>
 </AuthContextProvider>
)

ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
