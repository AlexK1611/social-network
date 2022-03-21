import { IPageRoute } from './Sidebar.types'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as UsersIcon } from 'assets/icons/users.svg'

export const pageRoutes: IPageRoute[] = [
    {
        id: 'main-page',
        path: '/',
        title: 'Main',
        icon: HomeIcon
    },
    {
        id: 'friends-page',
        path: '/friends',
        title: 'Friends',
        icon: UsersIcon
    }
]