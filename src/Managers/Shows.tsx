import showsList from "../data/shows";
import Show from "../Models/Show";

class Shows {
  _shows: Show[] = [];

  get() {
    if (!this._shows || this._shows.length < 1) {
      const { shows } = showsList;
      this._shows = shows.map(
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
    return this._shows;
  }

  getShowById = (id: string) =>
    this._shows[this._shows.findIndex(show => show.id === id)];

  getShowByDate = (date: string) => {
    debugger;
   return this._shows[this._shows.findIndex(show => show.date === date)];
  };
}

const _shows = new Shows();

export default _shows;
