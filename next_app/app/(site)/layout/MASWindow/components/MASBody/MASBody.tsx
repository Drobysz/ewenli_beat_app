import { ReactNode } from "react";
import styles from "./MasBody.module.scss";
import cn from 'classnames';

export const MASBody = ({
	children,
	isOpened
}: {
	children: ReactNode,
	isOpened: boolean
})=> {
	return (
		<div
            className={cn(styles.mas_window, {
                ['hidden']: !isOpened,
                ['fixed flex']: isOpened
            })}
        >
			{children}
		</div>
	)
}