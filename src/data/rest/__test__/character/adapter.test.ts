import { charactersList } from "../../../../lib/testData";
import { toModel } from "../../character/adapter";

describe("toModel", () => {
  test("transforms from DTO to Character", () => {
    const character = toModel(charactersList[0]);
    expect(character.character).toEqual("Carol Danvers / Captain Marvel");
    expect(character.fullName).toEqual("Brie Larson");
    expect(character.id).toEqual("60073");
    expect(character.imgPath).toEqual("/iqZ5uKJWbwSITCK4CqdlUHZTnXD.jpg");
  });
});
