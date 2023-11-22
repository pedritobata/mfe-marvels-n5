import ReactDOM from "react-dom/client";
//import { createMemoryHistory, createBrowserHistory } from 'history';
import "./index.css";
import App, { AppProps } from "./App";

const mount = (
  el: HTMLElement,
  { lang /*  onNavigate, defaultHistory, initialPath  */ }: AppProps
) => {
  /* const history =
      defaultHistory ||
      createMemoryHistory({
        initialEntries: [initialPath],
      });
  
    if (onNavigate) {
      history.listen(onNavigate);
    } */

  const root = ReactDOM.createRoot(el);
  root.render(
    <App lang={lang} />
    /* onSignIn={onSignIn} history={history} */
  );

  /* return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  }; */
};
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root") as HTMLElement;
  console.log("guardaaaa");
  if (devRoot) {
    mount(
      devRoot,
      { lang: "en" } /* , { defaultHistory: createBrowserHistory() } */
    );
  }
}

export { mount };
