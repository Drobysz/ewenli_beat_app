// Layout Styles
import styles from './layout/GridLayout.module.scss'

// Layout components
import { Header } from "./layout/Header";
import { ModalAccountSettingsWindow } from "./layout/ModalAccountSettingsWindow";
import { MenuWindow } from "./layout/MenuWindow";
import { Player } from "./layout/Player";
import { OpacityWrapper } from "./layout/OpacityWrapper";
import { Footer } from "./layout/Footer";

// Context Provider
import { SiteContextProvider } from "./context/site.context";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SiteContextProvider>
      <ModalAccountSettingsWindow />
      <MenuWindow />
      <Player />
      <OpacityWrapper className={styles.wrapper}> 
          <Header className={styles.header}/>
          <main className={styles.main}>
            {children}
          </main>
          <Footer className={styles.footer}/>
      </OpacityWrapper>
    </SiteContextProvider>
  );
}
