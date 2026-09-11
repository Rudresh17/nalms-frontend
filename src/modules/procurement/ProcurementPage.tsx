import { ShoppingCart } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import ComingSoon from '../../shared/components/ComingSoon'

export default function ProcurementPage() {
  return (
    <div>
      <PageHeader
        title="Procurement Management"
        description="Revenue procurement lifecycle tracking with department visibility"
      />
      <ComingSoon icon={ShoppingCart} />
    </div>
  )
}
