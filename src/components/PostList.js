import React from 'react';
import {FlatList, Text} from 'react-native';
import PostListItem from "./PostListItem";

const PostList = ({posts, onCommentPress}) => {
    return (
        <FlatList
            data={posts}
            renderItem={({item, index}) => (
                <PostListItem post={item} index={index} onCommentPress={onCommentPress}></PostListItem>
            )}
            keyExtractor={(item, index) => index}
        />
    );
};

export default PostList;