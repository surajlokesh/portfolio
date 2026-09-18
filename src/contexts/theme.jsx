import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const stored = () => {
  try {
    return localStorage.getItem('themeName')
  } catch {
    return null
  }
}

export const ThemeProvider = ({ children }) => {
  // Light is the default. The system preference is deliberately not consulted:
  // a visitor who wants the lit instrument asks for it with the toggle, and
  // that choice is what persists.
  const [themeName, setThemeName] = useState(() => stored() || 'light')

  // The root element owns the page ground and the scrollbar colour, so it has
  // to know the theme too — not just the app div that holds the tokens.
  useEffect(() => {
    document.documentElement.dataset.theme = themeName
  }, [themeName])

  const toggleTheme = () => {
    const next = themeName === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem('themeName', next)
    } catch {
      /* private browsing: the choice just will not persist */
    }
    setThemeName(next)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
