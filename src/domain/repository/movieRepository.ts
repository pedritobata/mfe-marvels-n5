import { Movie } from "../model/Movie";

export interface MovieRepository {
  getMovieById: (id: string) => Promise<Movie>;
}
