import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { LearnPage } from './pages/LearnPage'
import { InstallPage } from './pages/InstallPage'
import { ToolsPage } from './pages/ToolsPage'
import { GovernancePage } from './pages/GovernancePage'
import { CommunityPage } from './pages/CommunityPage'
import { DownloadPage } from './pages/DownloadPage'
import { VoidPage } from './pages/VoidPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/void" element={<VoidPage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  )
}

export default App
