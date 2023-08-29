import Card from "./card";
import { render, screen, fireEvent } from "@testing-library/react";
import image from "./obverse.svg";


const imgSrc = image;
const number = 1;
const alt = "Tarjeta del reverso";
const onClick = jest.fn();

describe("Card component", () => {
  test("renders correctly with props", () => {
    render(<Card imgSrc={imgSrc} number={number} onClick={onClick} revealed={false} alt={alt} />);

    const card = screen.getByRole("button");
    const numberSpan = screen.getByText(number);
    const obverseImg = screen.getByAltText("Tarjeta del anverso");

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("memory-game__card");
    expect(numberSpan).toBeInTheDocument();
    expect(numberSpan).toHaveClass("memory-game__card__number");
    expect(obverseImg).toBeInTheDocument();
    expect(obverseImg).toHaveClass("memory-game__card__obverse");
    expect(obverseImg).toHaveAttribute("src", "/_next/image?url=%2Fimg.jpg&w=256&q=75");
  });

  test("renders correctly when revealed", () => {
    render(<Card imgSrc={imgSrc} number={number} onClick={onClick} revealed={true} alt={alt} />);

    const card = screen.getByRole("button");
    const numberSpan = screen.queryByText(number);
    const obverseImg = screen.queryByAltText("Tarjeta del anverso");
    const reverseImg = screen.getByAltText(alt);

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("memory-game__card memory-game__card--revealed");
    expect(numberSpan).not.toBeInTheDocument();
    expect(obverseImg).not.toBeInTheDocument();
    expect(reverseImg).toBeInTheDocument();
    expect(reverseImg).toHaveClass("memory-game__card__image");
    expect(reverseImg).toHaveAttribute("src", "/_next/image?url=%2Fimg.jpg&w=96&q=75");
  });

  test("calls onClick function when clicked", () => {
    render(<Card imgSrc={imgSrc} number={number} onClick={onClick} revealed={false} alt={alt} />);

    const card = screen.getByRole("button");

    fireEvent.click(card);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
