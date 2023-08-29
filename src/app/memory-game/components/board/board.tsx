import styles from './board.module.css';
import Card from '../card/card';
import { Card as CardType } from '../../utilities/get-initial-cards';

interface BoardProps {
    cards: CardType[];
    onCardClicked: (card: CardType) => void;
}

export default function Board({cards, onCardClicked}: BoardProps) {
    return (
        <div className={styles['memory-game__board']}>
            {cards.map((card, index) => 
                <Card 
                    key={`${card.imgSrc}-${index}`} 
                    number={index + 1} 
                    imgSrc={card.imgSrc} 
                    revealed={card.revealed} 
                    onClick={() => onCardClicked(card)} 
                />
            )}
        </div>
    );
}