import { useEffect, useState } from "react";
import { Movie } from "../../../domain/model/Movie";
import { MovieUseCase } from "../../../domain/useCases/movieUseCase";
import { MovieRepositoryImpl } from "../../../data/rest/movie/movieRepositoryImpl";
import { GenericError } from "../../../domain/model/Error";

const movieUseCase = new MovieUseCase(new MovieRepositoryImpl());

const useFetchData = () => {
  const [movie, setMovie] = useState<Movie>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await movieUseCase.getMovieById();
      if (!(result as Movie).id) {
        setError((result as GenericError).errMsg);
      } else {
        setMovie(result as Movie);
        setError("");
      }
    };

    fetchData();
  }, []);

  return {
    movie,
    error,
  };
};

export default useFetchData;
