import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AuthPage from '../../pages/AuthPage/AuthPage'

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <AuthPage setUser={setUser}/>
      {/* { user ? (
        <>
        <Routes>
          <Route path='/spots' element={} />
        </Routes>
        </>

      ) : (
        <>
          <AuthPage setUser={setUser}/>
        </>
      )} */}
    </main>
  );
}