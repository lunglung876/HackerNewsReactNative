import React from 'react';
import {StackNavigator} from 'react-navigation';
import {HomeScreen} from './src/screens/HomeScreen';
import {PostScreen} from "./src/screens/PostScreen";
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Post: {
        screen: PostScreen,
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
