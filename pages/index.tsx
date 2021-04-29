import Head from 'next/head'
import Image from 'next/image'

const imgurLoader = ({ src }) => {
  return `https://i.imgur.com${src}`
}

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Ribeirando - Edição Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex md:justify-center">
        <img src="https://i.imgur.com/ROcgxhf.jpg" alt="Ribeirando" className="mx-auto" />
      </div>
    </div>
  )
}
