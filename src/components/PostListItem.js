import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import moment from 'moment';

const PostListItem = ({post, index}) => {
    return (
        <View style={[styles.item, index % 2 === 0 && styles.evenItem]}>
            <TouchableOpacity onPress={event => openURL(post.url)}>
                <Text style={styles.title}>{post.title}</Text>
            </TouchableOpacity>
            <View style={styles.metaContainer}>
                <Text style={styles.meta}>{moment(post.time, 'X').fromNow()}</Text>
                <Text style={styles.meta}>By {post.by}</Text>
            </View>
        </View>
    );
};

const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#333',
        padding: 10,
    },
    evenItem: {
        backgroundColor: '#444',
    },
    title: {
        color: '#BBB',
        fontSize: 18,
        marginBottom: 10,
    },
    metaContainer: {
        flexDirection: 'row'
    },
    meta: {
        color: '#999',
        fontSize: 13,
        marginRight: 15,
    },
});

export default PostListItem;