
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import About from './components/About'
import NewsPage from './components/NewsPage'
import Contract from './components/Contract'
import Quizz from './components/Quizz'
import Layout from './components/Layout'
// import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/contract' element={<Contract />} />
            <Route path='/quizz' element={<Quizz />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
