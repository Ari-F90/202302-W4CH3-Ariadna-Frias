import { render } from "@testing-library/react";
import { App } from "./app";
import { Header } from "../header/header";
import { Card } from "../../../feature/character-list/components/card";

jest.mock("../header/header");
jest.mock("../../../feature/character-list/components/card");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header & Card", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(Card).toHaveBeenCalled();
    });
  });
});
