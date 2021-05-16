import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@styles/global'
import { box } from '@styles/box'

function App({ Component, pageProps }: AppProps) {

  globalStyles()

  return (
    <div>
      <Head>
        <title>DEX Group</title>
        <meta name="description" content="DEX, a designer community." />
      </Head>

      <div className={
        box({
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        })
      }>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
