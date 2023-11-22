import { MovieUseCase } from "../../useCases/movieUseCase";
import { MovieRepositoryImpl } from "../../../data/rest/movie/movieRepositoryImpl";
import { movie } from "../../../lib/testData";
import { GenericError } from "../../model/Error";
import { toModel } from "../../../data/rest/movie/adapter";

const getMovieByIdMock = jest.spyOn(
  MovieRepositoryImpl.prototype,
  "getMovieById"
);

describe("MovieUseCase", () => {
  test("getMovieById returns correct movie", async () => {
    const movieModel = toModel(movie);
    getMovieByIdMock.mockReturnValue(Promise.resolve(movieModel));
    const movieUseCase = new MovieUseCase(new MovieRepositoryImpl());

    const result = movieUseCase.getMovieById("609681");

    expect(await result).toEqual(movieModel);
  });

  test("getMovieById returns error when no result", async () => {
    const newMovie = { ...toModel(movie), id: "" };
    getMovieByIdMock.mockReturnValue(Promise.resolve(newMovie));
    const movieUseCase = new MovieUseCase(new MovieRepositoryImpl());

    const result = movieUseCase.getMovieById("609681") as Promise<GenericError>;

    expect((await result).errMsg).toEqual("Could not get movies to display");
  });
});
