import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NotificationsPage from './NotificationsPage.tsx'
import VerbalConsentPage from './VerbalConsentPage.tsx'
import { HashRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ninniku" element={<NotificationsPage />} />
        <Route path="/verbal-consent" element={<VerbalConsentPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
