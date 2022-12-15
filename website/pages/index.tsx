import Head from 'next/head';
import Button from '../components/Button';
import GenerateForm from '../components/GenerateForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TinyURL</title>
        <meta name="description" content="TinyURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex items-center justify-center min-h-screen p-16'>
        <div className='relative grid grid-cols-2 gap-96'>
          <div>
            <h1 className='mb-4 text-6xl font-bold'>Make your <span className='text-transparent bg-clip-text bg-gradient-from-l bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>brand</span> unique.</h1>
            <p className='mb-8 text-2xl leading-normal text-neutral-400'>Whatever you`re doing in the web, short link are always better.</p>
            <div className='flex mb-8 space-x-4'>
              <Button appearance='primary'>Sign Up</Button>
              <Button>Use API</Button>
            </div>
          </div>
          <div>
            <div className=''>
              <GenerateForm />
            </div>
          </div>
        </div>
      </header>

      {/* <main>
        <section>
          <h1>Header</h1>
        </section>
      </main> */}
    </div>
  )
}
