const baseURI = 'https://hacker-news.firebaseio.com/v0/';

export function getPostList() {
    return fetch(baseURI + 'topstories.json')
        .then(response => response.json())
        .then(posts => {
            return posts;
        })
    ;
}

export function getItem(id) {
    return fetch(`${baseURI}item/${id}.json`)
        .then(response => response.json())
        .then(item => {
            return item;
        })
    ;
}