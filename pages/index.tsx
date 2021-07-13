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
      <img src="https://cdn.discordapp.com/attachments/752415841114390588/864371137717600286/Revista_Ribeirando_N3.png" alt="Ribeirando" className="mx-auto" />
    </div>
  )
}
