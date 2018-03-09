import React from 'react';
import {View} from 'react-native';
import PostContainer from '../containers/PostContainer';

export class PostScreen extends React.Component {
    static navigationOptions = {
        title: 'Comments',
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
                <PostContainer post={this.props.navigation.state.params.post}/>
            </View>
        );
    }
}