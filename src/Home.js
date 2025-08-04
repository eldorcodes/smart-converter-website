import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Smart Converter</h1>
      <p className="tagline">Convert HEIC images to JPG, PNG, PDF, or WEBP — fast, secure, and offline.</p>

      <div className="features">
        <ul>
          <li>📸 Convert from HEIC to JPG, PNG, PDF, or WEBP</li>
          <li>🔒 100% offline – your files never leave your device</li>
          <li>⚡ Lightning fast and simple to use</li>
        </ul>
      </div>

      <Link to="/privacy" className="privacy-link">
        View Privacy Policy
      </Link>
    </div>
  )
}

export default Home