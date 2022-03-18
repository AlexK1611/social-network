import { FC } from 'react'
import styles from './UserItem.module.scss'
import { IUserItem } from './UserItem.types'

export const UserItem: FC<IUserItem> = ({ username }) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userAvatar}></div>
            <p className={styles.userNickname}>
                {username}
            </p>
        </div>
    )
}