import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import AuthPage from '../../pages/AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import NewSpotPage from '../NewSpotPage/NewSpotPage'

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/' element={<NewSpotPage setUser={setUser}/>} />

            <Route path='/spots' element={ 
              < NewSpotPage 
                setUser={setUser}
              /> 
            } />
            
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