import React from 'react'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import {createRoot} from "react-dom/client";



const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>
)

