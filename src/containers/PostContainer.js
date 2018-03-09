import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postActions';
import Post from '../components/Post';

class PostContainer extends React.Component {
    componentDidMount() {
        // this.props.actions.loadPosts();
    }

    render() {
        return (
            <Post post={this.props.post} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comments
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(postActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);