// View
import { LoginView } from "./LoginView";

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.login.title,
    description: metaData.login.description,
  };
};

export default function Page () {
    return (
        <LoginView />
    );
};