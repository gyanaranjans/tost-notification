'use client'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useToast, Toast } from '@/components/tostHook'
import ThemeSwitcher from '@/components/themeSwitcher'

type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'

export default function Home() {
  const [position, setPosition] = useState<ToastPosition>('top-right')
  const { theme, setTheme } = useTheme()
  const notify = useToast()

  const positions: ToastPosition[] = [
    'top-left',
    'top-right',
    'top-center',
    'bottom-left',
    'bottom-right',
    'bottom-center',
  ]

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      className={`h-screen w-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <ThemeSwitcher />
      <div className='p-4 max-w-md w-full relative'>
        <div className='mb-4'>
          {positions.map((pos) => (
            <label key={pos} className='inline-flex items-center mr-3'>
              <input
                type='radio'
                className='form-radio'
                name='position'
                value={pos}
                checked={position === pos}
                onChange={() => setPosition(pos)}
              />
              <span className='ml-2'>{pos}</span>
            </label>
          ))}
        </div>
        <div className='flex flex-col space-y-4'>
          <button
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full'
            onClick={() => notify('success', 'This is a success message!', position)}
          >
            Success Toast
          </button>
          <button
            className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 w-full'
            onClick={() => notify('warning', 'This is a warning message!', position)}
          >
            Warning Toast
          </button>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-full'
            onClick={() => notify('error', 'This is an error message!', position)}
          >
            Error Toast
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full'
            onClick={() => notify('info', 'This is an info message!', position)}
          >
            Info Toast
          </button>
        </div>
        <Toast />
      </div>
    </div>
  )
}
