import { render, screen } from "@testing-library/react";
import Welcome from "./page";

describe("Welcome component", () => {
  test("should render the logo image", () => {
    render(<Welcome />);
    const logoElement = screen.getByAltText("MeMemory icon");
    expect(logoElement).toBeInTheDocument();
  });

  test("should render the title text", () => {
    render(<Welcome />);
    const titleElement = screen.getByText("MeMemory");
    expect(titleElement).toBeInTheDocument();
  });

  test("should render the link to memory game", () => {
    render(<Welcome />);
    const linkElement = screen.getByRole("link", { name: "Comenzar" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/memory-game");
  });
});
