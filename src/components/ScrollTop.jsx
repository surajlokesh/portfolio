import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a className='scroll-top' href='#top' aria-label='Back to top'>
      <ArrowUpIcon />
    </a>
  )
}

export default ScrollTop
