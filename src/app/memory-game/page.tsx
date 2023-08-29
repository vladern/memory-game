'use client'

import styles from './page.module.css';
import Board from './components/board';
import CompletedDialog from './components/completed-dialog/completed-dialog';
import { formatTime } from './utilities/format-time';
import useMemoryGame from './useMemoryGame';

export default function MemoryGame() {
    const { cards, isCompletedDialogOpen, timeInSeconds, onCardClicked, handleExit } = useMemoryGame();

    return (
        <main className={styles['memory-game']}>
            <Board cards={cards} onCardClicked={onCardClicked} />
            <CompletedDialog isOpen={isCompletedDialogOpen} time={formatTime(timeInSeconds)} handleExit={handleExit} />
        </main>
    );
}
