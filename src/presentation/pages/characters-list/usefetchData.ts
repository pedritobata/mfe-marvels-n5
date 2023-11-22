import { useEffect, useState } from "react";
import { CharacterUseCase } from "../../../domain/useCases/characterUseCase";
import { CharacterRepositoryImpl } from "../../../data/rest/character/characterRepositoryImpl";
import { Character } from "../../../domain/model/Character";

const characterUseCase = new CharacterUseCase(new CharacterRepositoryImpl());

const useFetchData = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const result = await characterUseCase.getAllByMovieId();
      if (!(result instanceof Array)) {
        setError(result.errMsg);
      } else {
        setCharacterList(result);
        setError("");
      }
      setLoading(false);
    };

    getCharacters();
  }, []);

  return {
    characterList,
    loading,
    error,
  };
};

export default useFetchData;
