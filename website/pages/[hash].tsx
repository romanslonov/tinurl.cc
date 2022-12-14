import { GetServerSidePropsContext } from 'next'

export default function Hash() {}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await fetch(`http://localhost:3000/redirect/${context.params.hash}`)
    .then((response) => response.json())
  
  if (data.statusCode === 404) {
    return {
      notFound: true
    }
  }


  return {
    props: {}, // will be passed to the page component as props
    redirect: {
      destination: data.link.destination,
      permanent: true,
    }
  }
}