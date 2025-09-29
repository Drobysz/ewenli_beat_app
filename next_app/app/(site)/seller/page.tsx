// Components
import { R3FShader, GrayFeed, ScrollPBlock, LevitatingImg } from '@/components/index';

// Deps
import cn from 'classnames';

// Fonts
import { bagel_fat_one, climate_crisis, cinzel, kiloy } from '@/fonts/fonts'; 

// Meta Data
import metaData from '@/metadata/metadata.json'

// Info on the GrayFeed
const feedData = 
[ 
    {n: '100', t: 'created songs', k: 1},
    {n: '200', t: 'subscribers on-YouTube', k: 2}, 
    {n: '100', t: 'sold songs', k: 3}, 
];

export async function generateMetadata(){
  return {
    title: metaData.seller.title,
    description: metaData.seller.description,
  };
};

export default function Page (){
    return (
        <>
            {/* Background */}
            <div className="absolute inset-0 z-1 overflow-hidden" style={{ width: '100vw', height: '120vh' }}>
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        left: 0,
                        pointerEvents: 'none',
                        background: 'linear-gradient( to bottom, transparent, #0A0A0A 85%)',
                        zIndex: 2,  
                    }}
                />
                <R3FShader />
            </div>
            
            {/* Title */}
            <div className='h-[100vh] z-2 w-full absolute inset-0 flex flex-col justify-center items-center gap-10 mb-30'>
                <h2 className={cn('text-black/30 text-9xl max-[660px]:text-8xl max-[590px]:text-6xl', kiloy.className)}>
                    EWENLI
                </h2>
            </div>
            {/* Border-Frame for the background */}
            <div className='h-[100vh] z-20 w-full bg-transparent flex justify-center items-center mb-18' />
            
            {/* Seller's levitating maskot and caption */}
            <div className='h-fit pt-10 z-20 w-full flex flex-col gap-6 justify-center items-center mb-30 max-[820px]:gap-16'>
                <LevitatingImg 
                    src='/seller/rabbit.png' 
                    width={200} 
                    height={600} 
                    alt='rabbit' 
                />
                
                <p className={cn('text-center text-white max-w-[700px] text-lg max-[820px]:text-md max-[820px]:max-w-[400px]', bagel_fat_one.className)}>
                    Bold sounds, glitchy textures, and raw emotion — this is the sonic world crafted by Ewenli. Fusing elements of digicore, hyperpop, and 2010s pop nostalgia, each track is a chaotic yet melodic ride through distorted reality.
                </p>
            </div>
            
            {/* Feed with data on the seller's achivements */}
            <GrayFeed className='py-3 flex justify-around mb-25 max-[600px]:flex-col max-[600px]:gap-20'>
                {
                    feedData.map( obj => (
                        <div key={obj.k} className='flex flex-col gap-3 text-4xl text-white text-center'>
                            <h2 className={cn(climate_crisis.className)}>{obj.n}</h2>
                            <h2 className={cn(cinzel.className, 'flex flex-col items-center')}>{obj.t.split(' ').map(w => <span key={w}>{w}</span>)}</h2>
                        </div>
                    ) )
                }
            </GrayFeed>

            {/* Container with animation of filling of paragraph  */}
            <ScrollPBlock />
        </>
    );
};
