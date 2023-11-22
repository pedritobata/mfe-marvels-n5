import { Movie } from "../../../domain/model/Movie";
import { MovieRepository } from "../../../domain/repository/movieRepository";
import { fetchMovieTMDB } from "../../../lib/rest-api";
import { toModel } from "./adapter";

export class MovieRepositoryImpl implements MovieRepository {
  async getMovieById(id: string): Promise<Movie> {
    const result = await fetchMovieTMDB(id);

    return toModel(result);
  }
}
