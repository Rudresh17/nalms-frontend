import { ClipboardCheck } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import ComingSoon from '../../shared/components/ComingSoon'

export default function PtsPage() {
  return (
    <div>
      <PageHeader
        title="PTS Approval & Tracking"
        description="Multi-level approval workflow with 45-day survey countdown"
      />
      <ComingSoon icon={ClipboardCheck} />
    </div>
  )
}
