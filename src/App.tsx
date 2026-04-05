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
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'
import { GetStarted } from './pages/learn/GetStarted'
import { Variables } from './pages/learn/Variables'
import { Memory } from './pages/learn/Memory'
import { Vector } from './pages/learn/Vector'
import { ExamplesPage } from './pages/ExamplesPage'
import { Functions } from './pages/learn/Functions'
import { Classes } from './pages/learn/Classes'
import { EndLearnPage } from './pages/EndLearnPage'

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
        <Route path="/about" element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/examples' element={<ExamplesPage />} />
        {/* LEARN SECTION */}
        <Route path='/learn/get-started' element={<GetStarted />} />
        <Route path='/learn/variables' element={<Variables />} />
        <Route path='/learn/memory' element={<Memory />} />
        <Route path='/learn/vector' element={<Vector />} />
        <Route path='/learn/functions' element={<Functions />} />
        <Route path='/learn/classes' element={<Classes />} />

        <Route path='/learn/end' element={<EndLearnPage />} />
        {/* END LEARN SECTION */}
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  )
}

export default App
