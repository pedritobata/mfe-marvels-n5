import { movie as movieDTO } from "../../../../lib/testData";
import { toModel } from "../../movie/adapter";

describe("toModel", () => {
  test("transforms from DTO to Movie", () => {
    const movie = toModel(movieDTO);
    expect(movie.id).toEqual("609681");
    expect(movie.description).toEqual(
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe."
    );
    expect(movie.posterPath).toEqual("/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg");
    expect(movie.title).toEqual("The Marvels");
  });
});
