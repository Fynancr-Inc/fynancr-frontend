import type { ReactNode } from "react"

interface FeatureBoxProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Icon Circle */}
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-sm">{description}</p>
    </div>
  )
}
