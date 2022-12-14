import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TinyURL</title>
        <meta name="description" content="TinyURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='min-h-screen flex items-center justify-center'>
        <div>
          <h1 className='font-bold text-4xl mb-4'>When shorter is better.</h1>
          <div className='flex justify-center space-x-2'>
            <Button>Generate</Button>
            <Button>Learn API</Button>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h1>Header</h1>
        </section>
      </main>
    </div>
  )
}
