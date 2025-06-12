// View
import { ShopView } from './ShopView';

// Meta data
import metaData from '@/metadata/metadata.json';


export async function generateMetadata(){
  return {
    title: metaData.shop.title,
    description: metaData.shop.description,
  };
};

export default function Page () {
  return (
    <ShopView />
  );
};