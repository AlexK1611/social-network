import { FC } from 'react'
import styles from './AppLayout.module.scss'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

export const AppLayout: FC = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      <Content>
        {children}
      </Content>
    </div>
  )
}