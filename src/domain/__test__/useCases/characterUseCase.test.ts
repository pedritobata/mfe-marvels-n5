import { CharacterUseCase } from "../../useCases/characterUseCase";
import { CharacterRepositoryImpl } from "../../../data/rest/character/characterRepositoryImpl";
import { charactersList } from "../../../lib/testData";
import { toModel } from "../../../data/rest/character/adapter";
import { GenericError } from "../../model/Error";

const getAllByMovieIdMock = jest.spyOn(
  CharacterRepositoryImpl.prototype,
  "getAllByMovieId"
);

describe("CharacterUseCase", () => {
  test("getAllByMovieId returns correct array", async () => {
    const list = charactersList.map(toModel);
    getAllByMovieIdMock.mockReturnValue(Promise.resolve(list));
    const characterUseCase = new CharacterUseCase(
      new CharacterRepositoryImpl()
    );

    const result = characterUseCase.getAllByMovieId();

    expect(await result).toEqual(list);
  });

  test("getAllByMovieId returns error when empty result array", async () => {
    getAllByMovieIdMock.mockReturnValue(Promise.resolve([]));
    const characterUseCase = new CharacterUseCase(
      new CharacterRepositoryImpl()
    );

    const result = characterUseCase.getAllByMovieId() as Promise<GenericError>;

    expect((await result).errMsg).toEqual(
      "Could not get characters to display"
    );
  });
});
