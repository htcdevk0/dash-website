import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home'},
  { to: '/install', label: 'Install' },
  { to: '/learn', label: 'Learn' },
  { to: '/tools', label: 'Tools' },
  { to: '/governance', label: 'Governance' },
  { to: '/community', label: 'Community' },
  { to: '/download', label: 'Download' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner container-wide">
          <NavLink to="/" className="brand" aria-label="Dash home">
            <img src="/logo-comb.svg" alt="Dash" className="brand__logo brand__logo--light" />
            <img src="/logo-comb-white.svg" alt="Dash" className="brand__logo brand__logo--dark" />
          </NavLink>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Dash</h3>
            <p>
              A systems language focused on explicit control, LLVM-based compilation,
              FFI, linking flexibility, and practical tooling.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><NavLink to="/learn">Learn</NavLink></li>
              <li><NavLink to="/tools">Tools</NavLink></li>
              <li><NavLink to="/tools/void">Void Build System</NavLink></li>
              <li><NavLink to="/install">Install</NavLink></li>
            </ul>
          </div>
          <div>
            <h4>Project</h4>
            <ul>
              <li><NavLink to="/governance">Governance</NavLink></li>
              <li><NavLink to="/community">Community</NavLink></li>
              <li><NavLink to="/download">Download</NavLink></li>
            </ul>
          </div>
          <div>
            <h4>Repositories</h4>
            <ul>
              <li><NavLink to="https://github.com/htcdevk0/dash" target='_blank'>Dash Language Repository</NavLink></li>
              <li><NavLink to="https://github.com/htcdevk0/dash-void" target='_blank'>Void Build Tool Repository</NavLink></li>
              <li><NavLink to="https://github.com/htcdevk0/dashtup" target='_blank'>Dashtup Repository</NavLink></li>
              <li><NavLink to="https://github.com/htcdevk0/dash-stdlib" target='_blank'>Dash Language StdLib Repository</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <p>
            Dash Programming Language<sup>™</sup> © 2026 — Made by htcdevk0
          </p>
        </div>
      </footer>
    </div>
  )
}
