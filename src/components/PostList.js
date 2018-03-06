import React from 'react';
import {FlatList, Text} from 'react-native';
import PostListItem from "./PostListItem";

const PostList = ({posts}) => {
    return (
        <FlatList
            data={posts}
            renderItem={({item, index}) => (<PostListItem post={item} index={index}></PostListItem>)}
            keyExtractor={(item, index) => index}
        />
    );
};

export default PostList;