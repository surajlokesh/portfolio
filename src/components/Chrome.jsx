import { useState } from 'react'
import { useTheme } from '../contexts/theme'
import { about } from '../portfolio'
import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from './icons'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const Chrome = () => {
  const { themeName, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='chrome'>
      <a className='chrome__mark' href='#top'>
        {about.name}
      </a>

      <nav className={`chrome__nav${isOpen ? ' is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className='chrome__link'
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className='chrome__status'>
        <span className='pulse' aria-hidden='true' />
        {about.availability}
      </p>

      <button
        type='button'
        className='chrome__btn'
        onClick={toggleTheme}
        aria-label={
          themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        }
      >
        {themeName === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>

      <button
        type='button'
        className='chrome__btn chrome__burger'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  )
}

export default Chrome
