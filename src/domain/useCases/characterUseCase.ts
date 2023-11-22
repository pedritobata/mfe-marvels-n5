import { GenericError } from "../model/Error";
import { Character } from "../model/Character";
import { CharacterRepository } from "../repository/characterRepository";

interface ICharacterUseCase {
  getAllByMovieId: (id?: string) => Promise<Character[] | GenericError>;
}

export class CharacterUseCase implements ICharacterUseCase {
  constructor(private _characterRepository: CharacterRepository) {}

  async getAllByMovieId(id = "609681"): Promise<Character[] | GenericError> {
    try {
      const result = await this._characterRepository.getAllByMovieId(id);
      if (!result || result.length === 0) {
        throw new Error("Could not get characters to display");
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
