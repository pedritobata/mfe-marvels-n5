import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Lang } from "./domain/model/Lang";
import CharactersList from "./presentation/pages/characters-list/CharactersList";

export interface AppProps {
  lang?: Lang;
}

function App({ lang }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    lang && i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <CharactersList />;
}

export default App;
