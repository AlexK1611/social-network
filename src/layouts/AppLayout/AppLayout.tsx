import { FC } from 'react'
import styles from './AppLayout.module.scss'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

export const AppLayout: FC = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      {children}
    </div>
  )
}