// react
import { useState, useEffect, UIEvent } from 'react'

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

    const handleScroll = (event: UIEvent<HTMLDivElement>) => {
        const eventTarget = event.currentTarget
        if (eventTarget.scrollHeight - eventTarget.scrollTop === eventTarget.clientHeight) {
            dispatch(getMorePostsAction(count))
            increaseCount(count + 20)
        }
    }

    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])

    return (
        <div className={styles.mainPage}>
            <div
                className={styles.postsSection}
                onScroll={handleScroll}
            >
                {dailyPost && (
                    <PostItem
                        title={dailyPost.title}
                        text={dailyPost.body}
                        isDaily
                    />
                )}
                <div className={styles.postItems}>
                    {posts && posts.map(post => (
                        <PostItem
                            key={`post-${post.id}`}
                            title={post.title}
                            text={post.body}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}