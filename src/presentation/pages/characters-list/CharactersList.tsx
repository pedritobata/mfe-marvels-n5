import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./styles";
import {
  Card,
  CardDescription,
  CardTitle,
} from "../../components/ui/card/Card";
import { TMDB_IMAGE_URL } from "../../../lib/constants";
import useFetchData from "./usefetchData";
import MovieDetail from "../../components/movie/MovieDetail";

const CharactersList: FC<{}> = () => {
  const { t, i18n} = useTranslation();
  const { characterList, error, loading } = useFetchData();
  console.log('lenguaje ==>', i18n.language);

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>{t("Loading")}</p>;
  }
  return (
    <React.Fragment>
      <MovieDetail />
      <Wrapper>
        <h2 className="character-list__title">{t("Cast")}</h2>
        <div className="character-list__container">
          {characterList.map(({ imgPath, character, fullName }) => (
            <Card img={`${TMDB_IMAGE_URL}/${imgPath}`}>
              <CardTitle title={character} />
              <CardDescription info={fullName} />
            </Card>
          ))}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default CharactersList;
