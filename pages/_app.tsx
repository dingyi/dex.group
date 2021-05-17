import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@styles/global'
import { box } from '@styles/box'
import PlausibleProvider from 'next-plausible'

function App({ Component, pageProps }: AppProps) {

  globalStyles()

  return (
    <PlausibleProvider domain="dex.group">
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
    </PlausibleProvider>
  )
}

export default App
