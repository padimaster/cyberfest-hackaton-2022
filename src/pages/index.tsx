import React from 'react'
import Head from 'next/head'
import { Footer, Header } from '@components'

export default function Home (): JSX.Element {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>CyberFest Hackaton</title>
      </Head>

      <Header />

      <main>

      </main>

      <Footer />

    </div>
  )
}
