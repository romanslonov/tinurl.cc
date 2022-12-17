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

      <header className='relative flex items-center justify-center min-h-screen p-8 overflow-hidden lg:p-16'>
        <div className='grid gap-16 lg:grid-cols-2 md:gap-16 lg:gap-32 xl:gap-96'>
          <div className='relative z-30'>
            <h1 className='mb-4 text-6xl font-bold'>Make your <span className='text-transparent bg-clip-text bg-gradient-from-l bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>brand</span> unique.</h1>
            <p className='mb-8 text-2xl leading-normal text-neutral-400'>Whatever you`re doing in the web, short links are always better.</p>
            <div className='flex space-x-4'>
              <Button appearance='primary'>Sign Up</Button>
              <Button>Use API</Button>
            </div>
          </div>
          <div className='relative z-30'>
            <div className='p-8 space-y-4 rounded-lg shadow bg-neutral-900'>
              <h2 className='mb-4 text-xl font-bold'>Generate microURL</h2>
              <GenerateForm />
            </div>
          </div>
        </div>
        <div className='absolute z-10 top-[40%] lg:top-[10%] right-0 rounded-full w-[400px] h-[400px] bg-gradient-from-tl bg-gradient-to-br from-orange-500 to-blue-500 via-purple-500 blur-3xl'></div>
        <div className='absolute z-20 top-[65%] lg:top-[25%] right-64 rounded-full w-[300px] h-[300px] bg-gradient-from-tl bg-gradient-to-br from-pink-500 to-blue-300 via-orange-500 blur-3xl'></div>
      </header>

      {/* <main>
        <section>
          <h1>Header</h1>
        </section>
      </main> */}
    </div>
  )
}
