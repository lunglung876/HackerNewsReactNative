import * as type from '../actions/actionTypes';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case type.LOAD_POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}