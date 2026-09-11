import {
  Boxes,
  Wallet,
  FileClock,
  ClipboardCheck,
  ShoppingCart,
  UtensilsCrossed,
} from 'lucide-react'
import PageHeader from '../shared/components/PageHeader'

const PRIORITY_STYLES: Record<string, string> = {
  Critical: 'bg-red-50 text-red-600',
  High: 'bg-amber-50 text-amber-600',
  Medium: 'bg-emerald-50 text-emerald-600',
}

const MODULES = [
  { name: 'VIMS', status: 'Not started', priority: 'Critical', icon: Boxes },
  { name: 'Imprest Calculation', status: 'Not started', priority: 'Critical', icon: Wallet },
  { name: 'Claims Advance & Tracking', status: 'Not started', priority: 'High', icon: FileClock },
  { name: 'PTS Approval & Tracking', status: 'Not started', priority: 'High', icon: ClipboardCheck },
  { name: 'Procurement Management', status: 'Not started', priority: 'High', icon: ShoppingCart },
  { name: 'Galley Feedback', status: 'Not started', priority: 'Medium', icon: UtensilsCrossed },
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
            <div
              key={m.name}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
