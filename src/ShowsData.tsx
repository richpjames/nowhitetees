import { isSameDay } from "date-fns";

import showsList from "./data/shows";
import Show from "./Models/Show";

class Shows {
  private _shows: Show[] = [];
  private _needsRefresh: boolean = true;

  public get() {
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
    this._needsRefresh = false;
    return this._shows;
  }

  public getMostRecentShowDate = () => {
    this._sortByDate();
    if (this._shows[0] && this._shows[0].date) return this._shows[0].date;
    else return new Date();
  };

  private _sortByDate = () => {
    this._shows.sort((a: Show, b: Show) => b.date.getTime() - a.date.getTime());
  };

  public getShowById = (id: string) =>
    this._shows[this._shows.findIndex(show => show.id === id)];

  public getShowByDate = (date: Date) => {
    if (this._needsRefresh) {
      this.get();
    }
    return this._shows[
      this._shows.findIndex(show => isSameDay(show.date, date))
    ];
  };
}

const _shows = new Shows();

export default _shows;
