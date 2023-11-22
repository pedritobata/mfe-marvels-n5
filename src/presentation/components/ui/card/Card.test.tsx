import { render, screen } from "@testing-library/react";
import { Card, CardDescription, CardTitle } from "./Card";

describe("Card", () => {
  test("renders character image", () => {
    render(<Card img="/somepath" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3 })).toBeNull();
    expect(screen.queryByRole("paragraph")).toBeNull();
  });

  test("renders character name if passed", () => {
    const title = "Some character";
    render(
      <Card img="/somepath">
        <CardTitle title={title} />
      </Card>
    );

    expect(
      screen.getByRole("heading", { level: 3, name: title })
    ).toBeInTheDocument();
  });

  test("renders actor full name if passed", () => {
    const actorFullname = "Samuel L. Jackson";
    render(
      <Card img="/somepath">
        <CardDescription info={actorFullname} />
      </Card>
    );

    expect(screen.getByText(actorFullname)).toBeInTheDocument();
  });
});
