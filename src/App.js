import React from 'react'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App