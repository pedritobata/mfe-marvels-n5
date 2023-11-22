import { Cast } from "../data/rest/character/dto";
import { MovieTMDBResponseDTO } from "../data/rest/movie/dto";

export const charactersList: Cast[] = [
  {
    adult: false,
    gender: 1,
    id: 60073,
    known_for_department: "Acting",
    name: "Brie Larson",
    original_name: "Brie Larson",
    popularity: 88.053,
    profile_path: "/iqZ5uKJWbwSITCK4CqdlUHZTnXD.jpg",
    cast_id: 1,
    character: "Carol Danvers / Captain Marvel",
    credit_id: "5d08fd3bc3a3687c751ef54c",
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 970219,
    known_for_department: "Acting",
    name: "Teyonah Parris",
    original_name: "Teyonah Parris",
    popularity: 23.967,
    profile_path: "/k3U24YNgdaINZEQ4PftebnN5cpU.jpg",
    cast_id: 15,
    character: "Monica Rambeau",
    credit_id: "5fd2c387fea0d7003c840847",
    order: 1,
  },
  {
    adult: false,
    gender: 1,
    id: 2798462,
    known_for_department: "Acting",
    name: "Iman Vellani",
    original_name: "Iman Vellani",
    popularity: 33.464,
    profile_path: "/uqaJuR24yXL1oXvAqUbOoEGChgb.jpg",
    cast_id: 14,
    character: "Kamala Khan / Ms. Marvel",
    credit_id: "5fd2c34c1d3143003c47b952",
    order: 2,
  },
];

export const movie: MovieTMDBResponseDTO = {
  adult: false,
  backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
  belongs_to_collection: {
    id: 623911,
    name: "Captain Marvel Collection",
    poster_path: "/mHiMmryCureDvoAOlGP6o3oXT8Y.jpg",
    backdrop_path: "/ubZUKycnQldt2umj0bPD2VwXDJM.jpg",
  },
  budget: 274800000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "https://www.marvel.com/movies/the-marvels",
  id: 609681,
  imdb_id: "tt10676048",
  original_language: "en",
  original_title: "The Marvels",
  overview:
    "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
  popularity: 712.55,
  poster_path: "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
    {
      id: 176762,
      logo_path: null,
      name: "Kevin Feige Productions",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2023-11-08",
  revenue: 161401072,
  runtime: 105,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Urdu",
      iso_639_1: "ur",
      name: "اردو",
    },
  ],
  status: "Released",
  tagline: "Higher. Further. Faster. Together.",
  title: "The Marvels",
  video: false,
  vote_average: 6.491,
  vote_count: 458,
};
