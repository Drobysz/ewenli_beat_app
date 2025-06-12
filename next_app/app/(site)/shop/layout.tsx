// Props
import { ReactNode } from "react";

// Layout Styles
import styles from './layout/ShopGridLayout.module.scss'

// Layout components
import { Logo } from "./layout/Logo";
import { Search } from "./layout/Search";
import { Categories } from "./layout/Categories";

// Context Provider
import { ShopContextProvider } from "./context/shop.context";

export default function ShopLayout ({
    children
}: {
    children: ReactNode
}) {
    return (
        <ShopContextProvider>
            <div className={styles.wrapper}>
                <Logo className={styles.logo}/>
                <Search className={styles.search}/>
                <Categories className={styles.categories}/>
                <div className={styles.songs}>
                    {children}
                </div>
            </div>
        </ShopContextProvider>
    );
};