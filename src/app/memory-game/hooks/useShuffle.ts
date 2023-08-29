import { useState, useEffect } from 'react';
import { Card } from '../utilities/get-initial-cards';

export default function useShuffle(initialCards: Card[]) {
  const [cards, setCards] = useState<Card[]>([]);

  const shuffleCards = (cardsToShuffle: Card[]) => {
    return [...cardsToShuffle].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  return {cards, setCards, shuffleCards};
}
