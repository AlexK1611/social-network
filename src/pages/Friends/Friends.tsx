// react
import { useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { userItems } from 'store/users/selectors'
import { getUsersAction } from 'store/users/actions'

// styles
import styles from './Friends.module.scss'

// types
import { IUserItem } from 'store/users/types'

// components
import { UserItem } from './components/UserItem/UserItem'

export const Friends = () => {
    const users: IUserItem[] | null = useSelector(userItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    return (
        <div className={styles.userItems}>
            {users && users.map(user => (
                <UserItem key={`user-${user.id}`} username={user.username}/>
            ))}
        </div>
    )
}