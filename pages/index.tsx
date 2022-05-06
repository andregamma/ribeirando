import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const editions = [
  'editions/1.jpg',
  'editions/2.png',
  'editions/3.png'
]

export default function Home() {
  const [currentEdition, setEdition] = useState(0);

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Ribeirando - Edição Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto flex items-center justify-center space-x-4 bg-white border-b p-2">
        {editions.map((edition, index) => (
          <button
            key={edition}
            className={`text-md font-medium focus:outline-none transition-colors duration-300 rounded hover:bg-gray-200 p-2 ${currentEdition === index ? 'bg-gray-200' : ''}`}
            onClick={() => setEdition(index)}
          >
            Edição {index + 1}
          </button>
        ))}
      </header>
      <img
        src={editions[currentEdition]}
        alt="Ribeirando"
        className="mx-auto"
      />
    </div>
  );
}
