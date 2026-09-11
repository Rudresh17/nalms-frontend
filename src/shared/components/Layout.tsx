import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Boxes,
  Wallet,
  FileClock,
  ClipboardCheck,
  ShoppingCart,
  UtensilsCrossed,
  Menu,
  X,
} from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', end: true, icon: LayoutDashboard },
  { to: '/vims', label: 'VIMS', icon: Boxes },
  { to: '/imprest', label: 'Imprest', icon: Wallet },
  { to: '/claims', label: 'Claims', icon: FileClock },
  { to: '/pts', label: 'PTS', icon: ClipboardCheck },
  { to: '/procurement', label: 'Procurement', icon: ShoppingCart },
  { to: '/galley', label: 'Galley Feedback', icon: UtensilsCrossed },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 shrink-0 flex-col bg-gradient-to-b from-navy to-navy-dark text-white transition-transform duration-200 md:static md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div>
            <div className="text-lg font-bold tracking-wide">NALMS</div>
            <div className="text-xs text-white/50">INS Shardul</div>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            className="text-white/70 hover:text-white md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-accent text-white font-medium shadow-sm'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Icon size={18} strokeWidth={2} className="shrink-0" />
                {item.label}
              </NavLink>
            )
          })}
        </nav>
        <div className="px-5 py-4 border-t border-white/10 text-[11px] text-white/40">
          Offline-first · Local server
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            className="text-navy"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
          <span className="font-semibold text-navy">NALMS</span>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

