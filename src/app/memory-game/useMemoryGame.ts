import { useCallback, useState } from 'react';
import { Card, getInitialCards } from './utilities/get-initial-cards';
import useShuffle from './hooks/useShuffle';
import useTimer from './hooks/useTimer';

export default function useMemoryGame() {
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [isCompletedDialogOpen, setIsCompletedDialogOpen] = useState(false);
    const {cards, setCards, shuffleCards} = useShuffle(getInitialCards());
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const {timeInSeconds} = useTimer(isTimerRunning);

    const handleMismatch = useCallback((firstCard: Card, secondCard: Card) => {
        setTimeout(() => {
            const newCards = cards.map((card) => {
                if (card.id === firstCard.id || card.id === secondCard.id) {
                    return { ...card, revealed: false };
                }
                return card;
            });
            setCards(newCards);
            setSelectedCards([]);
        }, 1000);
    }, [cards]);

    const onCardClicked = useCallback((card: Card) => {
        if (selectedCards.length > 1 || card.revealed) {
            return;
        }
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
        const newCards: Card[] = cards.map((c) => {
            if (c.id === card.id) {
                return { ...c, revealed: true };
            }
            return c;
        });
        setCards(newCards);
        setSelectedCards([...selectedCards, card]);
        const hasOneCardSelected = selectedCards.length === 1;
        if (hasOneCardSelected) {
            const isAMatch = selectedCards[0].imgSrc === card.imgSrc;
            if (isAMatch) {
                setSelectedCards([]);
                const isCompleted = newCards.every(card => card.revealed);
                if (isCompleted) {
                    setIsCompletedDialogOpen(true);
                    setIsTimerRunning(false);
                }
            } else {
                handleMismatch(selectedCards[0], card);
            }
        }
    }, [selectedCards, isTimerRunning, setCards, cards, setSelectedCards, handleMismatch]);

    const playAgain = () => {
        setIsCompletedDialogOpen(false);
        setCards(shuffleCards(getInitialCards()));
    };

    return { cards, isCompletedDialogOpen, timeInSeconds, onCardClicked, playAgain };
}
