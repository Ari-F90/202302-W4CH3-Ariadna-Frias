import React from "react";
import { screen, render } from "@testing-library/react";
import { Card } from "./card";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("then it should be an image in the document", () => {
      render(<Card />);
      const element = screen.getAllByRole("img");
      const elementCount = 5;
      expect(element.length).toBe(elementCount);
    });
  });
});
