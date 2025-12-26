import metaData from '@/metadata/metadata.json';
import {
  Intro,
  ServiceCards,
  WorkSamples,
  ShopInfo
} from "./page/index"

export async function generateMetadata(){
  return {
    title: metaData.main.title,
    description: metaData.main.description,
  };
};

export default function Home() {
  return (
    <>
      <Intro />
      <ServiceCards />
      <ShopInfo />
      <WorkSamples />
    </>
  );
}
