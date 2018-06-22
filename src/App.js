import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBRR-7LaCvFXNZSK5iOB8M4CD4FA3_KGdw',
      authDomain: 'manager-5f5a6.firebaseapp.com',
      databaseURL: 'https://manager-5f5a6.firebaseio.com',
      projectId: 'manager-5f5a6',
      storageBucket: 'manager-5f5a6.appspot.com',
      messagingSenderId: '515155361472'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <Router />
      </Provider>

    );
  }
}


export default App;