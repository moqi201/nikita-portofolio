
import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
