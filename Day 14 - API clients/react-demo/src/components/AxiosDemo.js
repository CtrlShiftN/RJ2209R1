import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosDemo = () => {
    const [post, setPost] = useState([]);
    const [postID, setPostID] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${postID}`)
            .then((res) => {
                // status code 200
                console.log(res.data);
                setPost(res.data);
            })
            .catch((err) => {
                // error handling here
                console.log(err);
            })
    }, [postID])
    return (
        <div className='container pt-3'>
            <p>{post.title}</p>
            <button onClick={() => { setPostID(postID + 1) }}>Click me!</button>
        </div>
    )
}

export default AxiosDemo