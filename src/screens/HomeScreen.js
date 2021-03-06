import React from 'react';
import {View} from 'react-native';
import PostListContainer from '../containers/PostListContainer';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'News',
        headerStyle: {
            backgroundColor: '#444',
            borderBottomColor: '#999',
            borderBottomWidth: 1
        },
        headerTitleStyle: {
            color: '#AAA'
        }
    };

    render() {
        return (
            <View style={{backgroundColor: '#444', flex: 1}}>
                <PostListContainer navigation={this.props.navigation}/>
            </View>
        );
    }
}