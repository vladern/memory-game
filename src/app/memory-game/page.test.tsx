import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MemoryGame from './page';

describe('MemoryGame', () => {
  test('renders the board with 18 cards', () => {
    render(<MemoryGame />);
    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(18);
  });
  test('flips a card when clicked', () => {
    render(<MemoryGame />);
    const card = screen.getAllByRole('button')[0];
    fireEvent.click(card);
    const cardReverseImg = screen.getByAltText('Tarjeta del reverso');
    expect(cardReverseImg).toBeInTheDocument();
  });
  test('shows Completed dialog when all cards are matched', async () => {
    jest.useFakeTimers();
    render(<MemoryGame />);
    const cards = screen.getAllByRole('button');
    for (let i = 0; i < 18; i++) {
        fireEvent.click(cards[i]);
        jest.advanceTimersByTime(1500);
        for (let j = 0; j < 18; j++) {
            fireEvent.click(cards[i]);
            fireEvent.click(cards[j]);
            jest.advanceTimersByTime(1500);
        }
    }
    jest.advanceTimersByTime(10000);
    expect(screen.getByText('¡Completado!')).toBeInTheDocument();
  });
  test('the game starts againg when the user clicks on the Play Again button', async () => {
    jest.useFakeTimers();
    render(<MemoryGame />);
    const cards = screen.getAllByRole('button');
    for (let i = 0; i < 18; i++) {
        fireEvent.click(cards[i]);
        jest.advanceTimersByTime(1500);
        for (let j = 0; j < 18; j++) {
            fireEvent.click(cards[i]);
            fireEvent.click(cards[j]);
            jest.advanceTimersByTime(1500);
        }
    }
    jest.advanceTimersByTime(10000);
    fireEvent.click(screen.getByText('Jugar otra vez'));
    const cardsAfterPlayAgain = screen.getAllByAltText('Tarjeta del anverso');
    expect(cardsAfterPlayAgain).toHaveLength(18);
  });
});
