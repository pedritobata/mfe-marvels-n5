import { render, screen } from "@testing-library/react";
import useFetchData from "./usefetchData";
import useFetchDataMovie from "../../components/movie/useFetchData";
import { charactersList, movie } from "../../../lib/testData";
import { toModel } from "../../../data/rest/character/adapter";
import { toModel as toModelMovie } from "../../../data/rest/movie/adapter";
import CharactersList from "./CharactersList";

const useFetchDataMock = useFetchData as jest.MockedFunction<
  typeof useFetchData
>;

const useFetchDataMovieMock = useFetchDataMovie as jest.MockedFunction<
  typeof useFetchDataMovie
>;

jest.mock("./usefetchData");
jest.mock("../../components/movie/useFetchData");

const returnedValue: ReturnType<typeof useFetchData> = {
  characterList: charactersList.map(toModel),
  error: "Oops!!",
  loading: false,
};

const returnedValueMovie: ReturnType<typeof useFetchDataMovie> = {
  error: "",
  movie: toModelMovie(movie),
};

describe("CharactersList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders error message on failure", () => {
    useFetchDataMock.mockReturnValue(returnedValue);
    render(<CharactersList />);

    expect(screen.getByText(returnedValue.error)).toBeInTheDocument();
  });

  test("renders loading indicator", () => {
    useFetchDataMock.mockReturnValue({
      ...returnedValue,
      error: "",
      loading: true,
    });
    render(<CharactersList />);

    expect(screen.getByText("Loading", { exact: false })).toBeInTheDocument();
  });

  test("renders movie detail", () => {
    useFetchDataMock.mockReturnValue({
      ...returnedValue,
      error: "",
      loading: false,
    });
    useFetchDataMovieMock.mockReturnValue(returnedValueMovie);
    render(<CharactersList />);

    expect(
      screen.getByRole("heading", { level: 2, name: /marvels/i })
    ).toBeInTheDocument();
  });

  test("render characters list", () => {
    useFetchDataMovieMock.mockReturnValue(returnedValueMovie);
    useFetchDataMock.mockReturnValue({ ...returnedValue, error: "" });
    render(<CharactersList />);

    expect(
      screen.getByRole("heading", { level: 2, name: /cast/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article").length).toBe(
      returnedValue.characterList.length
    );
  });
});
