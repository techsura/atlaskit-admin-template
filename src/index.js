import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* Firebase Config */
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import configureStore, { history } from './configureStore'
import MainRouter from './modules/MainRouter';
import '@atlaskit/css-reset';

// react-redux
const reactReduxConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileParamsToPopulate: [
    ['role:groups'], // populates user's role with matching role object from roles
  ]
}

const store = configureStore({})

const firebaseConfig = {
  apiKey: "AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8",
  authDomain: "urbarium-org.firebaseapp.com",
  databaseURL: "https://urbarium-org.firebaseio.com",
  projectId: "urbarium-org",
  storageBucket: "urbarium-org.appspot.com",
  messagingSenderId: "1043005680434"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reactReduxProps = {
  firebase,
  config: reactReduxConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const AppRoot = () => (
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxProps}>
        <MainRouter history={history}/>
      </ReactReduxFirebaseProvider>
    </Provider>
);

render(<AppRoot />, document.getElementById('app-root'));