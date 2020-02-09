interface ShowIOModel {
  title: string;
  date: string;
  photo: string;
  djs: [];
  description: string;
  url: string;
  id: string;
  tracklist: { artist: string; track: string; featuredArtists?: (string | never)[] };
}
type ShowsDBList = ShowIOModel[]