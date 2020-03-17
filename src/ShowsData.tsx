import showsList from "./data/shows";
import Show from "./Models/Show";

class Shows {
  shows: Show[] = [];

  public get() {
    if (!this.shows || this.shows.length < 1) {
      const { shows } = showsList;
      this.shows = shows.map(
        show =>
          new Show(
            show.title,
            show.date,
            show.photo,
            show.djs,
            show.description,
            show.url,
            show.id,
            show.tracklist
          )
      );
    }
    return this.shows;
  }

  getShowById = (id: string) =>
    this.shows[this.shows.findIndex(show => show.id === id)];

  getShowByDate = (date?: string) => {
    return this.shows[this.shows.findIndex(show => show.date === date)];
  };
}

const _shows = new Shows();

export default _shows;
