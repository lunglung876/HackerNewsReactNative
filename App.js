import React from 'react';
import {StackNavigator} from 'react-navigation';
import {HomeScreen} from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    );
  }
}
