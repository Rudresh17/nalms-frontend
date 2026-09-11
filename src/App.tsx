import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './shared/components/Layout'
import KioskLayout from './shared/components/KioskLayout'
import Dashboard from './dashboard/Dashboard'
import LoginPage from './auth/LoginPage'
import VimsPage from './modules/vims/VimsPage'
import ImprestPage from './modules/imprest/ImprestPage'
import ClaimsPage from './modules/claims/ClaimsPage'
import PtsPage from './modules/pts/PtsPage'
import ProcurementPage from './modules/procurement/ProcurementPage'
import GalleyAdminPage from './modules/galley/GalleyAdminPage'
import GalleyKioskPage from './modules/galley/GalleyKioskPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/kiosk/galley" element={<KioskLayout />}>
          <Route index element={<GalleyKioskPage />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="vims" element={<VimsPage />} />
          <Route path="imprest" element={<ImprestPage />} />
          <Route path="claims" element={<ClaimsPage />} />
          <Route path="pts" element={<PtsPage />} />
          <Route path="procurement" element={<ProcurementPage />} />
          <Route path="galley" element={<GalleyAdminPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

