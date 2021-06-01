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
      <img src="https://cdn.discordapp.com/attachments/785757647688171541/849123873512488980/Revista_Ribeirando_N2.png" alt="Ribeirando" className="mx-auto" />
    </div>
  )
}
