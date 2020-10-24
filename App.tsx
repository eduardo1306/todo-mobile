import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';
import Routes from './src/routes';
import store from './src/store';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>

      </Provider>
      <Routes />
    </>
  )
}

export default App;
