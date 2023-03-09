import { PostsContext } from "../../contexts/PostsProvider/context";
import { useContext, useEffect } from "react";
import { loadPosts } from '../../../src/contexts/PostsProvider/actions'
import { CounterContext } from "../../contexts/counterProvider/context";
import { incrementCounter } from "../../contexts/counterProvider/actions";
import { decrementCounter } from "../../contexts/counterProvider/actions";
export const Posts = () => {
    const postsContext = useContext(PostsContext);
    const {postsState, postsDispatch} = postsContext;

    const counterContext = useContext(CounterContext);
    const {counterState, counterDispatch} = counterContext;

    useEffect(()=>{
       loadPosts(postsDispatch);
    }, [postsDispatch])

    return (
        
        <div>
            <h1>POSTS</h1>
            <div>
                <h2>Context Counter</h2>
                <button 
                onClick={()=>incrementCounter(counterDispatch)}
                >Counter + {counterState.counter}</button>

                <button 
                onClick={()=>decrementCounter(counterDispatch)}
                >Counter - {counterState.counter}</button>
            </div>
            {postsState.loading && (<p><strong>Carregando...</strong></p>)}
            {postsState.posts.map(p => <p key = {p.id}>{p.title}</p>)}
        </div>
    );
}