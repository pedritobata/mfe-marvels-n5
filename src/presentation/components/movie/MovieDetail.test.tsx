import { render, screen } from "@testing-library/react";
import useFetchData from "./useFetchData";
import { movie } from "../../../lib/testData";
import { toModel } from "../../../data/rest/movie/adapter";
import MovieDetail from "./MovieDetail";

const useFetchDataMock = useFetchData as jest.MockedFunction<
  typeof useFetchData
>;

jest.mock("./useFetchData");

const returnedValue: ReturnType<typeof useFetchData> = {
  movie: toModel(movie),
  error: "",
};

describe("MovieDetail", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders movie poster", () => {
    useFetchDataMock.mockReturnValue(returnedValue);
    render(<MovieDetail />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders movie title", () => {
    useFetchDataMock.mockReturnValue(returnedValue);
    render(<MovieDetail />);

    expect(
      screen.getByRole("heading", { name: returnedValue?.movie?.title })
    ).toBeInTheDocument();
  });

  test("renders movie description", () => {
    useFetchDataMock.mockReturnValue(returnedValue);
    render(<MovieDetail />);

    expect(
      screen.getByText(returnedValue?.movie?.description as string)
    ).toBeInTheDocument();
  });
});
