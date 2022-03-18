import { FC } from 'react'
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom'
import styles from './CustomLink.module.scss'
import { ICustomLink } from './CustomLink.types'

export const CustomLink: FC<ICustomLink> = ({ path, title }) => {
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
            <p
                className={styles.customLinkTitle}
                style={{ color: match ? '#FA3954' : '#66DAFF' }}
            >
                {title}
            </p>
        </Link>
    )
}