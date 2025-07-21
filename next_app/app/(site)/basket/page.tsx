// Layout Styles
import styles from './layout/BasketGridLayout.module.scss'

// Layout components
import { Header } from "./layout/Header";
import { SideBar } from "./layout/SideBar";
import { BasketSpace } from "./layout/BasketSpace";

// Components
import { FullScreenSpin } from '@/components';


// Fetch functions
import { getBasketContent } from '@/helpers/basketRequest';
import { getBeatImages } from '@/helpers/s3LibRequests';

// Props
import { BeatUrl } from '@/interfaces/s3ElementData.interface';
import { Beat } from '@/interfaces/Products.interface';
import { UserSession } from '@/interfaces/UserData.interface';

// Meta data
import metaData from '@/metadata/metadata.json';


// Session
import { getSessionData } from '@/app/actions/sesssions';

export async function generateMetadata(){
  return {
    title: metaData.basket.title,
    description: metaData.basket.description,
  };
};

export default async function BasketPage() {
  const sessionData: UserSession | undefined = await getSessionData();

  if (sessionData === undefined) {
    return <FullScreenSpin />
  }

  const basketBeats: Beat[] = await getBasketContent(sessionData.token!);
  const beatImgs: BeatUrl[] = await getBeatImages();

  if (!basketBeats || !beatImgs) {
    return <FullScreenSpin />;
  }
  
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <SideBar basketBeats={basketBeats} className={styles.sidebar}/>
      <BasketSpace beatImgs={beatImgs} basketBeats={basketBeats}  className={styles.main} />
    </div>
  );
}