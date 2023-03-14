import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import AuthPage from '../../pages/AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import SpotPage from '../SpotPage/SpotPage'

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {/* <Route path='/' element={<SpotPage setUser={setUser}/>} /> */}

            <Route path='/' element={ 
              < SpotPage 
                setUser={setUser}
                user={user}
              /> 
            } />
            
            {/* <Route path='/spot/items' element={ 
              < SpotPage 
                setUser={setUser}
                user={user}
              /> 
            } /> */}
            
          </Routes>
        </>

      ) : (
        <>
          <AuthPage setUser={setUser}/>
        </>
      )}
    </main>
  );
}