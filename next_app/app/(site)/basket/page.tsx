// View
import { BasketView } from "./BasketView";

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.basket.title,
    description: metaData.basket.description,
  };
};


export default function Page () {
  return (
    <BasketView />
  );
};