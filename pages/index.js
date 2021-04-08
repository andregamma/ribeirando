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

      <main className="flex justify-center">
        {/**
          <div className="px-4 py-12 bg-pink-500">
            <p className="text-5xl font-bold text-center text-white uppercase">RIBEIRANDO</p>
          </div>
        */}
          <img src="https://i.imgur.com/ROcgxhf.jpg" alt=""/>
      </main>
    </div>
  )
}
