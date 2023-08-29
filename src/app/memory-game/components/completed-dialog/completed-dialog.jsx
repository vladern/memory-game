import Dialog from '@mui/material/Dialog';
import './completed-dialog.css';
import ClockSVG from './clock.svg';
import Button from '@/components/button';
import Image from 'next/image';


export default function CompletedDialog({ isOpen=false, handleExit, time='' }) {
  return (
      <Dialog open={isOpen} PaperProps={{sx: {borderRadius: '20px'}}} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <div className='memory-game__completed-dialog'>
            <section className='memory-game__completed-dialog__info'>
                <h1>¡Completado!</h1> 
                <Image src={ClockSVG} alt="Icono de reloj" /> 
                <span>{time}</span>
            </section>
            <section className='memory-game__completed-dialog__actions'>
                <Button onClick={handleExit}>Jugar otra vez</Button>
            </section>
        </div>
      </Dialog>
  );
}
