const ArtistList = () => {
  const different = [
    "drake",
    "linkin park",
    "metallica",
    "queen",
    "bruno mars",
    "2pac",
    "u2",
    "rihanna",
    "50-cent",
    "eminem",
    "future",
    "biggie",
  ];

  let arrayOfRandomArtists = [];

  return (
    <div>
      different.map((artist) => arrayOfRandomArtists.push(artist))
      console.log(arrayOfRandomArtists)
    </div>
  );
};

export default ArtistList;
