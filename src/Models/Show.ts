import randomSample from "../Utils/randomSample";

class Show {
  title: string;
  date: string;
  photoPath: string;
  djs: string[];
  description: string;
  url: string;
  id: string;
  tracklist: Track[];
  featuredArtists: Set<string | undefined>

  constructor(
    title: string,
    date: string,
    photoPath: string,
    djs: string[],
    description: string,
    url: string,
    id: string,
    tracklist: Track[]
  ) {
    this.title = title;
    this.date = date;
    this.photoPath = photoPath;
    this.djs = djs;
    this.description = description;
    this.url = url;
    this.id = id;
    this.tracklist = tracklist;
    this.featuredArtists = new Set()
  }


  //get randomly selected track from the show's tracklist

  getFeaturedArtist = () => {
    let randomTrack: Track = randomSample(this.tracklist);

    //if the track property(track title) is not null (EG not a DJ) then add it
    //to the featuredArtists set
    if (randomTrack.track !== null) {
      this.featuredArtists.add(randomTrack.artist);
      return;

      //if the track property is null then call this function again
    } else if (randomTrack.track === null && this.featuredArtists.size < 3) {
      // this.getFeaturedArtist();
      return;
    }
  };

  setNFeaturedArtists = (n: number): void => {
    for (let i = 0; i < n; i++) {
      this.getFeaturedArtist();
    }
    if (this.featuredArtists.size < 3) {
      this.getFeaturedArtist();
    }
  };
}

export default Show;
