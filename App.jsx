import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDOM from 'react-dom/client'
import { Outlet, Link } from "react-router-dom";
import './App.css'

function App() {
 
  return (
    <>
      <header>
        <h1>ברוכים הבאים למערכת ניהול לקוחות</h1>
        <h2>אצלנו כל לקוח יוצא מרוצה</h2>
      </header>
      <nav >
        <ul>
          <li>
            <Link to={'custemers'}>custemers</Link>
          </li>
          <li>
            <Link to={''}>main</Link>
          </li>
          <li>
            <Link to={'stastics'}>stastics</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet/>
      </div>
      
    </>
  )
}

export default App
