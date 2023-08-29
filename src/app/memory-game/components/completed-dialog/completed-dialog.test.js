import { render, screen, fireEvent } from '@testing-library/react';
import CompletedDialog from './completed-dialog';

describe('CompletedDialog component', () => {
    test('renders dialog with title, icon, time and button', () => {
        render(<CompletedDialog isOpen={true} time='00:30' />);
        const dialog = screen.getByRole('dialog');
        expect(dialog).toBeInTheDocument();
        const title = screen.getByText(/completado/i);
        expect(title).toBeInTheDocument();
        const icon = screen.getByAltText(/icono de reloj/i);
        expect(icon).toBeInTheDocument();
        const time = screen.getByText(/00:30/i);
        expect(time).toBeInTheDocument();
        const button = screen.getByRole('button', { name: /jugar otra vez/i });
        expect(button).toBeInTheDocument();
    });

    test('calls handleExit prop when button is clicked', () => {
        const handleExit = jest.fn();
        render(<CompletedDialog isOpen={true} handleExit={handleExit} />);
        const button = screen.getByRole('button', { name: /jugar otra vez/i });
        fireEvent.click(button);
        expect(handleExit).toHaveBeenCalledTimes(1);
    });

    test('does not render dialog when isOpen is false', () => {
        render(<CompletedDialog isOpen={false} />);
        const dialog = screen.queryByRole('dialog');
        expect(dialog).not.toBeInTheDocument();
    });
});
