import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { firebaseConfig } from './src/config';

export default function App() {

  React.useEffect(() => {     
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
      <View style={{ paddingTop: 15 }}>
        <LoginForm />
      </View>
    </Provider>
  );
}
