import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TinyURL</title>
        <meta name="description" content="TinyURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>dashboard</h1>
        </section>
      </main>

      <footer></footer>
    </div>
  )
}