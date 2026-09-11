import { ArrowUpRight, BarChart3 } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import GalleyFeedbackForm from './GalleyFeedbackForm'

/** LOGO-facing view: live feedback form preview + analytics (analytics still to be built). */
export default function GalleyAdminPage() {
  return (
    <div>
      <PageHeader
        title="Galley Feedback"
        description="Meal ratings, analytics, and recurring-complaint tracking"
      />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h2 className="font-semibold text-navy">Feedback Form Preview</h2>
            <a
              href="#/kiosk/galley"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Open Kiosk Display <ArrowUpRight size={16} />
            </a>
          </div>
          <GalleyFeedbackForm theme="light" />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <div className="rounded-full bg-navy/5 p-4 text-navy">
            <BarChart3 size={28} />
          </div>
          <p className="text-sm font-medium text-gray-600">Analytics dashboard under construction</p>
          <p className="max-w-sm text-sm text-gray-400">
            Meal-wise averages, satisfaction trends, and recurring complaints will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}
