import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { AppLayout } from 'layouts/AppLayout/AppLayout'
import { Friends } from 'pages/Friends/Friends'

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<p>main</p>} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/albums' element={<p>albums</p>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App