import {
  Boxes,
  Wallet,
  FileClock,
  ClipboardCheck,
  ShoppingCart,
  UtensilsCrossed,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../shared/components/PageHeader'

const PRIORITY_STYLES: Record<string, string> = {
  Critical: 'bg-red-50 text-red-600',
  High: 'bg-amber-50 text-amber-600',
  Medium: 'bg-emerald-50 text-emerald-600',
}

const MODULES = [
  { name: 'VIMS', status: 'Not started', priority: 'Critical', icon: Boxes, to: '/vims' },
  { name: 'Imprest Calculation', status: 'Not started', priority: 'Critical', icon: Wallet, to: '/imprest' },
  { name: 'Claims Advance & Tracking', status: 'Not started', priority: 'High', icon: FileClock, to: '/claims' },
  { name: 'PTS Approval & Tracking', status: 'Not started', priority: 'High', icon: ClipboardCheck, to: '/pts' },
  { name: 'Procurement Management', status: 'Not started', priority: 'High', icon: ShoppingCart, to: '/procurement' },
  { name: 'Galley Feedback', status: 'Not started', priority: 'Medium', icon: UtensilsCrossed, to: '/galley' },
]

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Command Dashboard"
        description="Unified view across all NALMS modules"
      />
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {MODULES.map((m) => {
          const Icon = m.icon
          return (
            <Link
              key={m.name}
              to={m.to}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:border-accent/40"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-navy/5 p-2.5 text-navy">
                  <Icon size={20} />
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_STYLES[m.priority]}`}
                >
                  {m.priority}
                </span>
              </div>
              <h2 className="mt-3 font-semibold text-navy">{m.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{m.status}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
