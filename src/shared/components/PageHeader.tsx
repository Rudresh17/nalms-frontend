interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-4 py-5 backdrop-blur sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-navy sm:text-2xl">{title}</h1>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
    </div>
  )
}
