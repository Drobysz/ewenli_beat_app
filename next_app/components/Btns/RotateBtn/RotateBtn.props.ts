import { Dispatch, SetStateAction } from "react";

export interface RotateBtnProps {
	isRotated: boolean;
	setRotate: Dispatch<SetStateAction<boolean>>;
}