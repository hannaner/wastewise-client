// import { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import AuthPage from '../../pages/AuthPage/AuthPage'

export default function App() {
  // const [user, setUser] = useState(getUser)
  return (
    <main className="App">
      <AuthPage />
    </main>
  );
}