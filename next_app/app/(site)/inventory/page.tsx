// View
import { InventoryView } from "./InventoryView"

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.inventory.title,
    description: metaData.inventory.description,
  };
};

export default function Page () {
    return (
        <InventoryView />
    )
};