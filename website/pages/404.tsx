import Head from 'next/head';

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>Requested URL is not found...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Page is not found :(
      </main>
    </div>
  )
}