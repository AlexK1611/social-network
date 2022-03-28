import { FC } from 'react'
import styles from './PostItem.module.scss'
import { IPostItemProps } from './PostItem.types'

export const PostItem: FC<IPostItemProps> = ({ title, text, isDaily }) => {
    return (
        <div className={
            isDaily
            ? `${styles.postItem} ${styles.dailyPost}`
            : styles.postItem
        }>
            <p className={styles.postTitle}>
                {title}
            </p>
            <p className={styles.postText}>
                {text}
            </p>
        </div>
    )
}