import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";

afterAll(() => {
  cleanup();
});

describe("Home component", () => {
  test("should render Home component", () => {
    render(<Home />);

    const element = screen.getByTestId("home-page");
    expect(element).toBeInTheDocument();
  });

  test("render imgs if data loaded", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "fg",
          url: "https://cdn2.thecatapi.com/images/9oi.jpg",
        },
      ],
    });
    render(<Home />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
