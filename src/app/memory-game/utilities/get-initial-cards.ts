import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image8 from '../images/8.png';
import image9 from '../images/9.png';
import image10 from '../images/10.png';
import image15 from '../images/15.png';
import image16 from '../images/16.png';
import image17 from '../images/17.png';
import { StaticImageData } from 'next/image';

export interface Card {
    id: number;
    imgSrc: StaticImageData;
    revealed: boolean;
    row: number;
}

export function getInitialCards(): Card[] {
    return [
        { id: 1, imgSrc: image3, revealed: false, row: 1 },
        { id: 2, imgSrc: image4, revealed: false, row: 1 },
        { id: 3, imgSrc: image5, revealed: false, row: 1 },
        { id: 4, imgSrc: image8, revealed: false, row: 1 },
        { id: 5, imgSrc: image9, revealed: false, row: 1 },
        { id: 6, imgSrc: image10, revealed: false, row: 1 },
        { id: 7, imgSrc: image15, revealed: false, row: 1 },
        { id: 8, imgSrc: image16, revealed: false, row: 1 },
        { id: 9, imgSrc: image17, revealed: false, row: 1 },
        { id: 10, imgSrc: image3, revealed: false, row: 2 },
        { id: 11, imgSrc: image4, revealed: false, row: 2 },
        { id: 12, imgSrc: image5, revealed: false, row: 2 },
        { id: 13, imgSrc: image8, revealed: false, row: 2 },
        { id: 14, imgSrc: image9, revealed: false, row: 2 },
        { id: 15, imgSrc: image10, revealed: false, row: 2 },
        { id: 16, imgSrc: image15, revealed: false, row: 2 },
        { id: 17, imgSrc: image16, revealed: false, row: 2 },
        { id: 18, imgSrc: image17, revealed: false, row: 2 },
    ];
}
