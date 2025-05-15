import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SearchProvider } from "./context/SearchContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider> {/* ✅ Add this */}
    <App />
      </SearchProvider>
  </StrictMode>,
)
