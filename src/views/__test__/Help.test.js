import { render, screen, cleanup } from "@testing-library/react";
import Help from "../Help";

afterAll(() => {
  cleanup();
});

describe("Help component", () => {
  test("should render Help component", () => {
    render(<Help />);

    const element = screen.getByTestId("help-page");
    expect(element).toBeInTheDocument();
  });

  test("should render link in Help component", () => {
    render(<Help />);

    const element = screen.getByTestId("help-link");
    expect(element).toContainHTML("</Link>");
  });
});
