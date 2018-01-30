import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAjVUBv_JsasVUT-KB2Rm_eAjhjB_b5YNE",
      authDomain: "udemy-rn-manager-428ad.firebaseapp.com",
      databaseURL: "https://udemy-rn-manager-428ad.firebaseio.com",
      projectId: "udemy-rn-manager-428ad",
      storageBucket: "udemy-rn-manager-428ad.appspot.com",
      messagingSenderId: "223878397897"
    };

    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <LoginForm>
          </LoginForm>
        </Provider>
    );
  }
}

export default App;
