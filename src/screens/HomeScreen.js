import React from 'react';
import { View, Text } from 'react-native';
import PostListContainer from '../containers/PostListContainer';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <PostListContainer />
      </View>
    );
  }
}