import { CharactersTMDBResponseDTO } from "../data/rest/character/dto";
import { MovieTMDBResponseDTO } from "../data/rest/movie/dto";
import { TMDB_AUTHORIZATION_KEY } from "./constants";

const baseUrl = "https://api.themoviedb.org/3/movie/";

export const fetchData = async (url: string, headers?: any): Promise<any> => {
  try {
    const result = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!result.ok) {
      throw new Error("Network failure");
    }

    return await result.json();
  } catch (error) {
    AbortSignal.abort();
    throw new Error("Error requesting data");
  }
};

export const fetchMovieTMDB = async (
  params: string
): Promise<MovieTMDBResponseDTO> => {
  return (await fetchData(`${baseUrl}/${params}`, {
    Authorization: `Bearer ${TMDB_AUTHORIZATION_KEY}`,
  })) as MovieTMDBResponseDTO;
};

export const fetchCharactersTMDB = async (
  params: string
): Promise<CharactersTMDBResponseDTO> => {
  const result = await fetchData(`${baseUrl}/${params}/credits`, {
    Authorization: `Bearer ${TMDB_AUTHORIZATION_KEY}`,
  });
  return result as CharactersTMDBResponseDTO;
};
