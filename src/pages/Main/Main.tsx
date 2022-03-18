// react
import { useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { postItems } from 'store/posts/selectors'
import { getPostsAction, getMorePostsAction } from 'store/posts/actions'

// styles
import styles from './Main.module.scss'

// types
import { IPostItem } from 'store/posts/types'

// components
import { PostItem } from './components/PostItem/PostItem'

export const Main = () => {
    const [count, increaseCount] = useState(0)
    const handleIncreaseCount = () => {
        increaseCount(count + 10)
    }

    const posts: IPostItem[] | null = useSelector(postItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])

    useEffect(() => {
        dispatch(getMorePostsAction(count))
    }, [dispatch, count])

    return (
        <>
            <div>
                {posts && posts.map(post => (
                    <PostItem
                        key={`post-${post.id}`}
                        title={post.title}
                        text={post.body}
                    />
                ))}
            </div>
            <button
                className={styles.loadMoreBtn}
                onClick={handleIncreaseCount}
            >
                Load more
            </button>
        </>
    )
}