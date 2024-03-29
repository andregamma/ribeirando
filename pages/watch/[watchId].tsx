import { NextPage } from "next";
import React from "react";
import ArtistLogo from "../../components/ArtistLogo";
import { getArtistData } from "../../utils/transformers";

interface Props {
  watchId: string | string[];
  watchReference: string | string[]
}

const Watch: NextPage<Props> = ({ watchId, watchReference }) => {

  if (!watchId) {
    return (
      <p className="text-center">Opa! Não encontramos esse vídeo.</p>
    )
  }

  const bgColor = getArtistData(watchReference, "bgColor")

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${bgColor}`}>
      <ArtistLogo artistRef={watchReference} />
      <div className="w-full md:w-3/4 h-80 md:h-player">
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${watchId}?modestbranding=1&showinfo=0&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

Watch.getInitialProps = async ({ query }) => {
  const watchId = query.watchId
  const watchReference = query.ref

  return { watchId, watchReference }

}

export default Watch