import { render, screen } from "@testing-library/react";

import { describe, expect, test } from "vitest";
import { Loading } from "./Loading.tsx";
describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then a loading text appear", () => {
      render(<Loading />);

      expect(screen.getByText("Loading")).toBeInTheDocument();
    });
  });
});
