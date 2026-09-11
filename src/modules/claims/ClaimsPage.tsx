import { FileClock } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import ComingSoon from '../../shared/components/ComingSoon'

export default function ClaimsPage() {
  return (
    <div>
      <PageHeader
        title="Claims Advance & Tracking"
        description="Digital advance register with deadline tracking and overdue alerts"
      />
      <ComingSoon icon={FileClock} />
    </div>
  )
}
