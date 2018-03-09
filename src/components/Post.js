import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from "moment/moment";

const Post = ({post}) => {
    return (
        <View>
            <Text style={styles.title}>{post.title}</Text>
            <View style={styles.metaContainer}>
                <Text style={styles.meta}>{moment(post.time, 'X').fromNow()}</Text>
                <Text style={styles.meta}>By {post.by}</Text>
                <Text style={styles.meta}>{post.score} points</Text>
            </View>
            <Text style={[styles.meta, styles.comments]}>{post.kids.length} comments</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#BBB',
        fontSize: 18,
        marginBottom: 10,
    },
    metaContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    meta: {
        color: '#999',
        fontSize: 13,
        marginRight: 15,
    },
    comments: {
        color: '#BBB',
    }
});

export default Post;