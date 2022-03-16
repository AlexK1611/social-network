import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { AppLayout } from 'layouts/AppLayout/AppLayout'
import { Main } from 'pages/Main/Main'

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/friends' element={<p>friends</p>} />
          <Route path='/albums' element={<p>albums</p>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App