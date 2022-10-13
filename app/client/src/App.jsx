import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch'
import './App.css'
import { pages } from './routes'
import NotWorkingPage from './pages/notworking';


function App() {
  const { data, loading, error } = useFetch('http://localhost:4000');
  return (
    <>
      <Router>
        <Routes>
          {data
            ? pages.map((page) => (<Route key={page.id} path={page.path} element={<page.element />} />))
            : <Route path='*' element={<NotWorkingPage />} />}
        </Routes>
      </Router>
    </>
  )
}

export default App;
