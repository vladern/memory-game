import { ReactNode } from 'react';
import styles from './button.module.css';

export default function Button({ children, onClick }: { children?: ReactNode, onClick?: () => void }) {
    return (
        <button className={styles.button} onClick={onClick}>{children}</button>
    );
}
