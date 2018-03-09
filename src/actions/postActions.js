import  * as types from './actionTypes';
import { getPostList, getItem } from "../api/api";

export function loadPostsSuccess(posts) {
    return {
        type: types.LOAD_POSTS_SUCCESS,
        posts
    }
}

export function loadCommentsSuccess(comments) {
    return {
        type: types.LOAD_COMMENTS_SUCCESS,
        comments
    }
}

export function loadPosts() {
    return dispatch => {
        getPostList().then(posts => {
            return Promise.all(posts.slice(0,5).map(getItem))
                .then(posts => dispatch(loadPostsSuccess(posts)))
            ;
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadComments(ids) {
    return dispatch => {
        return Promise.all(ids.map(getItem))
            .then(comments => dispatch(loadCommentsSuccess(comments)))
        ;
    }
}