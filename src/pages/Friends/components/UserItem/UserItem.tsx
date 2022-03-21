import { FC } from 'react'
import styles from './UserItem.module.scss'
import { IUserItemProps } from './UserItem.types'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'

export const UserItem: FC<IUserItemProps> = ({ username }) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userAvatarContainer}>
                <UserIcon className={styles.userAvatar} />
            </div>
            <p className={styles.userNickname}>
                {username}
            </p>
        </div>
    )
}