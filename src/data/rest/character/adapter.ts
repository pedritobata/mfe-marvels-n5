import { Character } from "../../../domain/model/Character";
import { Cast } from "./dto";

export const toModel = (characterDTO: Cast): Character => {
  const {
    id,
    character = "Unknown",
    original_name,
    profile_path = "",
  } = characterDTO;

  return {
    id: id.toString(),
    character,
    fullName: original_name,
    imgPath: profile_path,
  };
};
