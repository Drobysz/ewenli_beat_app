// Props
import { FC } from "react";
import BtnProps from "./BubleText.props";

// Styles
import styles from './Bubble.module.scss';

export const Bubletext: FC<BtnProps> = ({text, className}) => {
    return (
        <h2 className={className}>
            {text.split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};