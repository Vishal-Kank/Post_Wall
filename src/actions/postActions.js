import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts=() => dispatch =>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data=>data.json())  //parsed using data.json()
    .then(posts=> dispatch({
        type: FETCH_POSTS,
        payload:posts
    }))
};


export const createPost= (postData) => dispatch =>{

    console.log('from Reducer')

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(postData)
    })
    .then(res=>res.json())  //parsed using data.json()
    .then(post=> dispatch({
        type: NEW_POST,
        payload:post
    }))
};
