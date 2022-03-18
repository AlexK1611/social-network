// react
import { useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { postItems } from 'store/posts/selectors'
import { getPostsAction } from 'store/posts/actions'

// types
import { IPostItem } from 'store/posts/types'

// components
import { PostItem } from './components/PostItem/PostItem'

export const Main = () => {
    const posts: IPostItem[] | null = useSelector(postItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])

    return (
        <div>
            {posts && posts.map(post => (
                <PostItem
                    key={`post-${post.id}`}
                    title={post.title}
                    text={post.body}
                />
            ))}
        </div>
    )
}