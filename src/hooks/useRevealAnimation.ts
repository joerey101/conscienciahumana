import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useRevealAnimation() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [location.pathname])
}
