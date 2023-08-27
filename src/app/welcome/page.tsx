import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.svg';
import styles from './page.module.css';
import Button from '@/components/button';

export default function Welcome() {
    return (
        <main className={styles.welcome}>
            <section className={styles.welcome__center}>
                <div className={styles.welcome__icon}>
                    <Image src={logo} alt='MeMemory icon' />
                </div>
                <h1 className={styles.welcome__text}>MeMemory</h1>
                <Link className={styles.welcome__link} href='/memory-game'>
                    <Button>Comenzar</Button>
                </Link>
            </section>
        </main>
    );
}
