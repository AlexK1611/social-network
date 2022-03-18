import { FC } from 'react'
import styles from './Content.module.scss'

export const Content: FC = ({ children }) => {
    return (
        <section className={styles.appContent}>
            {children}
        </section>
    )
}