'use client'

import Head from 'next/head'

interface MetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function Meta({
  title = 'Cosmos — Portal Espacial',
  description = 'Explore o universo com Cosmos, seu portal espacial.',
  image = '/og-image.png',
  url = 'https://cosmos.exemplo.com',
}: MetaProps) {
  return (
  
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
