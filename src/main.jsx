// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom' // Import HashRouter, Routes, and Route
import Home from '@pages/Home'
import About from '@pages/About'
import Category from '@pages/Category'
import NotFoundPage from '@pages/NotFoundPage'

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes basename='/cc'>  {/* Define your Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
