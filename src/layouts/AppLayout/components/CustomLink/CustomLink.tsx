import { FC } from 'react'
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom'
import styles from './CustomLink.module.scss'
import { ICustomLink } from './CustomLink.types'

export const CustomLink: FC<ICustomLink> = ({ path, title, icon: Icon }) => {
    const resolvedPath = useResolvedPath(path)
    const match = useMatch({
        path: resolvedPath.pathname,
        end: true
    })

    return (
        <Link
            to={path}
            className={styles.customLink}
        >
            <Icon
                className={styles.customLinkIcon}
                fill={ match ? '#71E7FF' : '#F5F5F5' }
            />
            <p
                className={styles.customLinkTitle}
                style={{ color: match ? '#71E7FF' : '#F5F5F5' }}
            >
                {title}
            </p>
        </Link>
    )
}