import Image, { StaticImageData } from "next/image";
import styles from "./card.module.css";
import obverseSVG from "./obverse.svg";

interface CardProps { 
    imgSrc?: StaticImageData;
    number?: number;
    onClick: () => void;
    revealed: boolean;
    alt?: string 
}

export default function Card({ imgSrc, number, onClick, revealed, alt }: CardProps) {
    return (
        <div
            role="button"
            className={`${styles["memory-game__card"]} ${revealed ? styles["memory-game__card--revealed"] : ""}`}
            style={{ cursor: !revealed ? "pointer" : "default" }}
            onClick={onClick}
        >
            {!revealed &&
                (
                    <>
                        <span className={styles["memory-game__card__number"]}>{number}</span>
                        <Image
                            className={styles["memory-game__card__obverse"]}
                            src={obverseSVG}
                            width={100}
                            alt="Tarjeta del anverso" />
                    </>
                )
            }
            {(imgSrc && revealed) &&
                <Image
                    className={styles["memory-game__card__image"]}
                    src={imgSrc}
                    alt={alt ? alt : "Tarjeta del reverso"}
                />
            }
        </div>
    );
}
