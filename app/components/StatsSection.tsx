'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItemProps {
  end: number
  label: string
  suffix?: string
}

function StatItem({ end, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = itemRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 secondes

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end])

  return (
    <div ref={itemRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ClearView en chiffres
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatItem end={500} label="Clients satisfaits" suffix="+" />
          <StatItem end={10000} label="Vitres nettoyées" suffix="+" />
          <StatItem end={5} label="Années d'expérience" />
          <StatItem end={100} label="Satisfaction client" suffix="%" />
        </div>
      </div>
    </section>
  )
}