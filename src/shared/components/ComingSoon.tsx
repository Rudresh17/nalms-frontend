import type { LucideIcon } from 'lucide-react'

interface ComingSoonProps {
  icon: LucideIcon
}

/** Shared placeholder body for modules not yet built. */
export default function ComingSoon({ icon: Icon }: ComingSoonProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-full bg-navy/5 p-4 text-navy">
        <Icon size={28} />
      </div>
      <p className="text-sm font-medium text-gray-600">Module under construction</p>
      <p className="max-w-sm text-sm text-gray-400">
        This module is scheduled per the build plan and isn't wired up yet.
      </p>
    </div>
  )
}
