// Layout Styles
import styles from './layout/GridLayout.module.scss'

// Layout components
import { Header } from "./layout/Header";
import { ModalAccountSettingsWindow } from "./layout/MASWindow/MASWindow";
import { LicenseWindow } from './layout/LicenseWindow/LicenseWindow';
import { MenuWindow } from "./layout/MenuWindow";
import { OpacityWrapper } from "./layout/OpacityWrapper";
import { Footer } from "./layout/Footer";
import { Player } from "@/components/index";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <ModalAccountSettingsWindow />
      <LicenseWindow />
      <MenuWindow />
      <Player />
      <OpacityWrapper className={styles.wrapper}> 
          <Header className={styles.header}/>
          <main className={styles.main}>
            {children}
          </main>
          <Footer className={styles.footer}/>
      </OpacityWrapper>
    </>
  );
}
