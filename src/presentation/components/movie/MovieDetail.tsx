import { FC } from "react";
import { Wrapper } from "./styles";
import useFetchData from "./useFetchData";
import { TMDB_IMAGE_URL } from "../../../lib/constants";

const MovieDetail: FC<{}> = () => {
  const { movie, error } = useFetchData();

  if (!movie || error) {
    return <p>{error}</p>;
  }
  return (
    <Wrapper>
      <img
        className="movie__poster"
        src={`${TMDB_IMAGE_URL}/${movie.posterPath}`}
        alt="Movie"
      />
      <div className="movie__body">
        <h2 className="movie__title">{movie.title}</h2>
        <p className="movie__description">{movie.description}</p>
      </div>
    </Wrapper>
  );
};

export default MovieDetail;
