import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getArtistData } from "../utils/transformers";

interface ArtistData {
  id: string
  name: string
  bgColor: string
  textColor: string
}

interface Props {
  artistRef: string | string[]
}

const ArtistLogo = ({ artistRef }: Props) => {

  const [artistData, setArtistData] = useState<ArtistData>(null)

  const getAllArtistData = async () => {
    const data = getArtistData(artistRef, "all")
    setArtistData(data)
  }

  useEffect(() => {
    getAllArtistData()
  }, [])


  return (
    artistData ? (
      <div>
        <p className={`text-5xl my-4 font-bold uppercase ${artistData.textColor}`}>
          {artistData.name}
        </p>
      </div>
    ) : (
      <p className="my-4 text-5xl font-bold text-pink-600">Oops!</p>
    )
  );

}

export default ArtistLogo;