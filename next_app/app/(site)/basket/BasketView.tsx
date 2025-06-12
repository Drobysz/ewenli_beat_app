'use client';

// Layout Styles
import styles from './layout/BasketGridLayout.module.scss'

// Layout components
import { Header } from "./layout/Header";
import { SideBar } from "./layout/SideBar";
import { BasketPage } from "./layout/BasketPage";

// Components
import { Beat } from '@/interfaces/Products.interface';
import { FullScreenSpin } from '@/components';

// Context
import { AppContext } from '@/app/context/app.context';

// Fetch functions
import { getBasketContent } from '@/helpers/basketRequest';
import { getBeatImages } from '@/helpers/s3LibRequests';

// Hook
import { useState, useEffect, useContext } from 'react';

// Props
import { BeatUrl } from '@/interfaces/s3ElementData.interface';


export function BasketView() {
  const [ basketBeats, setBasketBeats ] = useState<Beat[]>();
  const [ beatImgs, setBeatImgs ] = useState<BeatUrl[]>();
  const { token } = useContext(AppContext);

  useEffect(()=> {
    if (!token) return;

    async function fetchBasketBeats() {
      const beats = await getBasketContent(token!);
      const imgs = await getBeatImages()

      setBasketBeats(beats);
      setBeatImgs(imgs);
    }
    
    fetchBasketBeats();
  },[token]);

  if (!basketBeats || !beatImgs) {
    return <FullScreenSpin />;
  }
  
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <SideBar basketBeats={basketBeats} className={styles.sidebar}/>
      <BasketPage beatImgs={beatImgs} basketBeats={basketBeats}  className={styles.main} />
    </div>
  );
}