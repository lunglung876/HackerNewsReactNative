import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postActions';
import PostList from '../components/PostList';

class PostListContainer extends React.Component {
    componentDidMount() {
        this.props.actions.loadPosts();
    }

    render() {
        return (
            <PostList posts={this.props.posts} onCommentPress={this.onCommentPress}/>
        );
    }

    onCommentPress = (post) => {
        this.props.navigation.navigate('Post', {post});
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(postActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);