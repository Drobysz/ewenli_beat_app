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

// Session
import { UserSession } from '@/interfaces/UserData.interface';
import { getSessionData } from '@/app/actions/sesssions';

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData: UserSession | undefined = await getSessionData();  

  return (
    <SiteContextProvider initialSession={sessionData}>
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
