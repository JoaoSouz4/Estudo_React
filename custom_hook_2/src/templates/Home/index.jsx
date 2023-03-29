import  './styles.css';
import { useState } from 'react';
import { useFetch } from './use-fetch';
import { LoadComponent } from '../../components/LoadComponent';

export const Home = () => {
    const [postId, setPostId] = useState('');
    const [result, loadStatus] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        headers : {
            key: 'valu'
        }
    });

    const handleClick = (id) => {
        setPostId(id);
    }

    if(loadStatus) {
        return <LoadComponent/>
    }

    if(!loadStatus && result) {
        return (
            <div className="posts">
                {result?.length >= 0 ? (
                    result.map( item => (
                    <div key = { item.id } className = 'post'>
                        <h2>{ item.title }</h2>
                        <p>{item.body}</p>
                        <div className = 'options'>
                            <button onClick = { () => handleClick(item.id)} >See more</button>
                            <label>{item.id}</label>
                        </div>
                    </div>
                ))
                ) : (
                <div className = 'post'>
                    <h2>{ result.title }</h2>
                    <p>{result.body}</p>
                    <div className = 'options'>
                        <button onClick = { () => handleClick('')} >Later</button>
                        <label>{result.id}</label>
                    </div>
                </div>
                )}
             </div>
            );
    }
}