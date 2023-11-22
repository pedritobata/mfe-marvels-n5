import { GenericError } from "../model/Error";
import { Movie } from "../model/Movie";
import { MovieRepository } from "../repository/movieRepository";

interface IMovieUseCase {
  getMovieById: (id: string) => Promise<Movie | GenericError>;
}

export class MovieUseCase implements IMovieUseCase {
  constructor(private _movieRepository: MovieRepository) {}

  async getMovieById(id = "609681"): Promise<Movie | GenericError> {
    try {
      const result = await this._movieRepository.getMovieById(id);
      if (!result?.id) {
        throw new Error("Could not get movies to display");
      }
      return result;
    } catch (error) {
      const err: GenericError = {
        errMsg: (error as Error).message || "Something went wrong",
      };
      console.error(err.errMsg, (error as Error).cause);

      return err;
    }
  }
}
