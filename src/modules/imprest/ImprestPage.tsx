import { Wallet } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import ComingSoon from '../../shared/components/ComingSoon'

export default function ImprestPage() {
  return (
    <div>
      <PageHeader
        title="Imprest Calculation"
        description="Automated monthly imprest requirement based on personnel movement requests"
      />
      <ComingSoon icon={Wallet} />
    </div>
  )
}
