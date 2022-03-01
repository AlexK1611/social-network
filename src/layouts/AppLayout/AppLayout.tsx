import { FC } from 'react'
import styles from './AppLayout.module.scss'

export const AppLayout: FC = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <header className={styles.appHeader}></header>
      <aside className={styles.appSidebar}></aside>
      <section className={styles.appContent}>
        {children}
      </section>
    </div>
  )
}