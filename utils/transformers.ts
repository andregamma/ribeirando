const artists = [
  {
    id: "bloods",
    name: "Bloods",
    bgColor: "bg-black",
    textColor: "text-red-600",
  },
  {
    id: "thetunners",
    name: "The Tunners",
    bgColor: "bg-black",
    textColor: "text-red-800",
  },
  {
    id: "ganggreen",
    name: "Gang Green Mob",
    bgColor: "bg-gang-green",
    textColor: "text-white",
  },
  {
    id: "cart",
    name: "Cart",
    bgColor: "bg-cart",
    textColor: "text-white",
  },
  {
    id: "elprimoninja",
    name: "El Primo Ninja",
    bgColor: "bg-black",
    textColor: "text-elprimoninja",
  },
  {
    id: "sixtyeight",
    name: "Sixty Eight",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

const getArtistData = (artistId: string | string[], ref: string) => {
  const data = artists.find((artist) => artist.id === artistId);

  if (data) {
    if (ref === "all") {
      return data;
    } else {
      return data[ref];
    }
  }
};

export { getArtistData };
