import { Movie } from "../../../domain/model/Movie";
import { MovieTMDBResponseDTO } from "./dto";

export const toModel = (movieDTO: MovieTMDBResponseDTO): Movie => {
  const { id, original_title, overview, poster_path } = movieDTO;

  return {
    id: id.toString(),
    title: original_title,
    description: overview,
    posterPath: poster_path,
  };
};
