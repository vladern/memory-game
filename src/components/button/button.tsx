import { ReactNode } from 'react';
import './Button.css';

export default function Button({ children, onClick }: { children?: ReactNode, onClick?: () => void }) {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    );
}
