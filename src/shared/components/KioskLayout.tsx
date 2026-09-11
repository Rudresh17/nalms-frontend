import { Outlet } from 'react-router-dom'

/** Fullscreen, chrome-less shell for galley feedback tablets — no sidebar, no navigation away. */
export default function KioskLayout() {
  return (
    <div className="flex h-screen w-screen select-none flex-col overflow-hidden bg-gradient-to-b from-navy to-navy-dark">
      <Outlet />
    </div>
  )
}
