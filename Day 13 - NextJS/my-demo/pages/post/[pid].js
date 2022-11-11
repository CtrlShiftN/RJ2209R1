import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    return <p>Post: {pid}</p>
}

export default Post;