import * as types from './types';
export const loadPosts = async (dispatch) => {
    setTimeout( async()=>{
        const postsRaw = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await postsRaw.json();
        dispatch({ type: types.POSTS_SUCESS, payload: posts });
    }, 2000)
    dispatch({type: types.POSTS_LOADING})
}