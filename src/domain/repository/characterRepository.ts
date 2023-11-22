import { Character } from "../model/Character";

export interface CharacterRepository {
  getAllByMovieId: (id: string) => Promise<Character[]>;
}
