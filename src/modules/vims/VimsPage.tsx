import { Boxes } from 'lucide-react'
import PageHeader from '../../shared/components/PageHeader'
import ComingSoon from '../../shared/components/ComingSoon'

export default function VimsPage() {
  return (
    <div>
      <PageHeader
        title="Victualling Inventory Management (VIMS)"
        description="Stock tracking, ADC/DSR calculations, MSL alerts, demand forecasting"
      />
      <ComingSoon icon={Boxes} />
    </div>
  )
}
