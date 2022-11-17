import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ActiveLink from './ActiveLink'

const data = [
  {
    name: 'Inicio',
    to: '/'
  },
  {
    name: 'Cronograma',
    to: '/cronograma'
  },
  {
    name: 'Auspiciantes',
    to: '/auspiciantes'
  },
  {
    name: 'FAQ',
    to: '/faq'
  }
]

export default function Header (): JSX.Element {
  return (
        <header className='sticky top-0 px-7 py-5 z-20'>
          <nav className='flex items-start justify-between max-w-7xl mx-auto
        z-20 xl:items-center'>
            <Link href="/">
              <Image src="/logo.png" width={50} height={50} alt="Cyberfest Logo"/>
            </Link>

            <ul className='flex flex-row items-center space-x-5'>
              {data.map(link => {
                return (
                <ActiveLink href={link.to} key={link.name}>
                  <span>{link.name}</span>
                </ActiveLink>
                )
              }
              )}
            </ul>

            <div className='font-semibold px-4 py-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-400'>
              Regístrate
            </div>
          </nav>
        </header>
  )
}
