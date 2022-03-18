import { FC } from 'react'
import styles from './UserItem.module.scss'
import { IUserItemProps } from './UserItem.types'

export const UserItem: FC<IUserItemProps> = ({ username }) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userAvatar}></div>
            <p className={styles.userNickname}>
                {username}
            </p>
        </div>
    )
}