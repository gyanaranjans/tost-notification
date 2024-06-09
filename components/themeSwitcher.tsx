import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 mb-4 absolute top-0 right-0 m-4'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 3v1' />
          <path d='M12 20v1' />
          <path d='M3 12h1' />
          <path d='M20 12h1' />
          <path d='m18.364 5.636-.707.707' />
          <path d='m6.343 17.657-.707.707' />
          <path d='m5.636 5.636.707.707' />
          <path d='m17.657 17.657.707.707' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
        </svg>
      )}
    </button>
  )
}

export default ThemeSwitcher
