import { Header } from "./header";
import { screen, render } from "@testing-library/react";

describe("Given header component", () => {
  test("renders the following element", () => {
    render(<Header></Header>);
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
  });
});
