import { render, screen, fireEvent } from '@testing-library/react';
import Board from './board';
import { Card } from '../../utilities/get-initial-cards';

const image = {
  src: './image.png',
  height: 40,
  width: 40,
}

describe('Board', () => {
  test('renders a card for each element in the cards prop', () => {
    const cards: Card[] = [
      { imgSrc: image, revealed: false, id: 1, row: 1 },
      { imgSrc: image, revealed: false, id: 2, row: 1  },
    ];
    render(<Board cards={cards} onCardClicked={() => {}} />);
    const cardElements = screen.getAllByRole('button');
    expect(cardElements).toHaveLength(2);
  });

  test('on click to a card onCardClicked must be called', () => {
    const cards = [
      { imgSrc: image, revealed: false, id: 1, row: 1 },
    ];
    const mockOnClick = jest.fn();
    render(<Board cards={cards} onCardClicked={mockOnClick} />);
    const cardElement = screen.getByRole('button');
    fireEvent.click(cardElement);
    expect(mockOnClick).toHaveBeenCalledWith(cards[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
