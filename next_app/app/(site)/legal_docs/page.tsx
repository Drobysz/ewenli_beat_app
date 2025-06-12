// Components
import { Bubletext, VerticalCarousel } from '@/components/index';

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.legal_docs.title,
    description: metaData.legal_docs.description,
  };
};

export default function Page () {
    return (
        <div className='w-full flex pt-5 flex-col items-center gap-10 max-[1280px]:px-30 max-[800px]:px-10'>
            <Bubletext 
                text='Legal documentation' 
                className='text-8xl font-thin text-white max-[850px]:text-6xl text-center' 
            />

            <VerticalCarousel />
        </div>
    );
};