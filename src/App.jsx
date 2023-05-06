import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin.jsx'
import UserHome from './pages/UserHome.jsx';
import ProtectedRoutes from './pages/ProtectedRoutes.jsx';
import PrivateRoutes from './pages/PrivateRoutes.jsx';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
        <Route exact path='/' element= {<UserLogin/>} />
        </Route>
        <Route element={<PrivateRoutes/>}>
        <Route exact path='/home' element= {<UserHome/>} />
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
