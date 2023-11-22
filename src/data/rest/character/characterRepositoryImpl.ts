import { Character } from "../../../domain/model/Character";
import { CharacterRepository } from "../../../domain/repository/characterRepository";
import { fetchCharactersTMDB } from "../../../lib/rest-api";
import { toModel } from "./adapter";

export class CharacterRepositoryImpl implements CharacterRepository {
  async getAllByMovieId(id: string): Promise<Character[]> {
    const result = await fetchCharactersTMDB(`${id}`);

    return result.cast.map(toModel);
  }
}
