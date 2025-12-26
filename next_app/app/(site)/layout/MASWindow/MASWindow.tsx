"use client"

import { useContext } from "react";
import { SiteContext } from "@/app/context/site.context";
import { Cross } from "@/components/index";
import { bagel_fat_one } from "@/fonts/fonts";
import cn from 'classnames';
import { LogoutForm, ModifyFormsBlock, MASBody } from "./components/index";
import styles from "./MASWindow.module.scss";

export const ModalAccountSettingsWindow = ()=> {
    const { currentModalWindow, setModalWindow } = useContext(SiteContext);
    const isOpened = currentModalWindow == 'AccountSettings';

    return (
        <MASBody
            isOpened={isOpened}
        >
            <Cross
                className={styles.mas_cross}
                width={32}
                onClick={()=> setModalWindow('none')}
            />

            <h1 className={cn(
                styles.mas_title,
                bagel_fat_one.className
            )}>
                Account data
            </h1>

            <ModifyFormsBlock />
            <LogoutForm />
        </MASBody>
    )
};