import styles from './Sidebar.module.scss'
import { pageRoutes } from './Sidebar.helpers'
import { CustomLink } from '../CustomLink/CustomLink'

export const Sidebar = () => {
    return (
        <aside className={styles.appSidebar}>
            <ul>
                {pageRoutes.map(route => (
                    <CustomLink
                        key={route.id}
                        path={route.path}
                        title={route.title}
                    />
                ))}
            </ul>
        </aside>
    )
}