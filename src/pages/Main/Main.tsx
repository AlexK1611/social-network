// react
import { useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { dailyPostItem, postItems } from 'store/posts/selectors'
import { getPostsAction, getMorePostsAction } from 'store/posts/actions'

// styles
import styles from './Main.module.scss'

// types
import { IPostItem } from 'store/posts/types'

// components
import { PostItem } from './components/PostItem/PostItem'

export const Main = () => {
    const [count, increaseCount] = useState(20)

    const posts: IPostItem[] | null = useSelector(postItems)
    const dailyPost: IPostItem | null = useSelector(dailyPostItem)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])

    const handleLoadMore = () => {
        dispatch(getMorePostsAction(count))
        increaseCount(count + 20)
    }

    return (
        <div className={styles.mainPage}>
            {dailyPost && (
                <PostItem
                    title={dailyPost.title}
                    text={dailyPost.body}
                    isDaily
                />
            )}
            {posts && (
                <div className={styles.postItems}>
                    {posts.map(post => (
                        <PostItem
                            key={`post-${post.id}`}
                            title={post.title}
                            text={post.body}
                        />
                    ))}
                </div>
            )}
            <button
                className={styles.loadMoreBtn}
                onClick={handleLoadMore}
            >
                More
            </button>
        </div>
    )
}