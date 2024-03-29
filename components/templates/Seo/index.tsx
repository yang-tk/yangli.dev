import Head from 'next/head'

export interface ISeo {
  title: string
  description: string
}

export const Seo: React.FC<ISeo> = (props) => {
  const { title, description } = props

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="preload" as="font" href="fonts/Gilroy-Light.woff2" />
      <link rel="preload" as="font" href="fonts/Gilroy-Regular.woff2" />
      <link rel="preload" as="font" href="fonts/Gilroy-Medium.woff2" />
      <link rel="preload" as="font" href="fonts/Menlo-Regular.woff2" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.4.1/css/all.min.css"
      />
    </Head>
  )
}
