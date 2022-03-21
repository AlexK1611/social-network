import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { AppLayout } from 'layouts/AppLayout/AppLayout'
import { Main } from 'pages/Main/Main'
import { Friends } from 'pages/Friends/Friends'

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App