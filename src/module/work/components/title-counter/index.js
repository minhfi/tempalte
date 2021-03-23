import DetectLink from '@/components/detect-link'
import React from 'react'

export default function TitleCounter({ to, label, count = 0 }) {
  return (
    <DetectLink to={to}>
      <div className="title-counter">
        <span>{label}</span>
        <span>{count}</span>
      </div>
    </DetectLink>
  )
}