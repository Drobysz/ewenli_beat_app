// Fonts
import { bagel_fat_one, avenir, bebas_neue, audiowide } from "@/fonts/fonts";

// Dependencies
import cn from "classnames";

// Components
import { CustomBtn, ServiceCard, Carousel, AuroraRGB, RotateObjHorizontally, MaskContainer } from '@/components/index';
import Image from "next/image";

// Data
import service from '@/public/serviceInfo.json';

// Meta Data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.main.title,
    description: metaData.main.description,
  };
};

export default function Home() {
  return (
    <>
      {/* Intro container */}
      <section className="w-full h-[800px] flex flex-col justify-center items-center gap-5 z-1 relative mb-20 pb-40 max-[690px]:gap-3">

        {/* Title */}
        <h1 className={ cn(bagel_fat_one.className, 'flex flex-col items-center text-5xl text-transparent bg-gradient-to-br from-gold to-pinkish bg-clip-text leading-18 max-[690px]:text-3xl max-[690px]:leading-12 max-[550px]:leading-10 max-[425px]:text-2xl max-[425px]:leading-8') }>
          <span>SHOP of Licences for Beats</span> 
          <span>Samples</span>
        </h1>

        {/* Description */}
        <p className={cn('w-[508px] text-center text-transparent bg-gradient-to-br from-white to-gray-50 bg-clip-text max-[690px]:text-xs max-[690px]:w-[350px] max-[425px]:text-[0.8rem] max-[425px]:w-[300px]', avenir.className)}>This isn’t just music — it’s a signal. Glitchy, punchy, future-born. Created to disrupt, not decorate. Each beat breaks the mold. Each drop rewires the rules. Welcome to the audio rebellion.</p>

        {/* Button refering to the shop page */}
        <CustomBtn rgb color="gray-ghost" size="medium" link="/shop">boutique</CustomBtn>

        {/* RGB Background */}
        <AuroraRGB />
      </section>


      {/* Containter with cards on services info */}
      <section className="w-full h-fit flex flex-col items-center gap-16 mb-50 max-[960px]:mb-40">
          {/* Title box */}
          <div className="w-full flex justify-center content-center gap-8 text-2xl max-[945px]:px-10 max-[795px]:flex-col max-[795px]:items-center max-[795px]:gap-3 max-[570px]:text-xl">
            <h2 className={cn("text-white", audiowide.className)}>What kind of products i propose?</h2>
            <h2 className={cn("text-gray-50", bebas_neue.className)}>Everything you need to build great products on the web</h2>
          </div>

          <div className="w-full flex justify-center items-center gap-7 px-3 max-[795px]:flex-col">
              {
                service.map( c => <ServiceCard 
                  key={c.key}
                  title={c.title} 
                  description={c.description} 
                  img={c.image} 
                /> )
              }
          </div>
      </section>

      {/* Container dedicated to shop */}
      <section className="flex gap-9 justify-center items-center mb-60 max-[1280px]:px-20 max-[550px]:px-3 max-[670px]:mb-36 max-[490px]:justify-between">
        <RotateObjHorizontally
          className="rounded-full aspect-square p-8 max-[715px]:p-7 max-[550px]:p-4 max-[420px]:p-0"
        >
          <Image 
              src={'/swrc.png'} 
              width={476} 
              height={476}
              className="hover:shadow-[0px_0px_10px_5px_#953396] rounded-full w-full max-w-[476px] min-[1055px]:w-[476px] max-[1055px]:w-[320px] max-[1055px]:h-[320px] max-[670px]:w-[255px] max-[670px]:h-[255px] max-[550px]:w-[200px] max-[550px]:h-[200px] max-[420px]:w-[150px] max-[420px]:h-[150px]"
              alt="Telegram & Shop promo"
          />
        </RotateObjHorizontally>

        <div className="flex flex-col items-end gap-10 max-[670px]:gap-5 max-[490px]:w-[35%] max-[420px]:w-[50%]">
          <MaskContainer
            maskClassName="text-4xl leading-12 text-center max-[1055px]:text-3xl max-[1055px]:leading-8 max-[960px]:text-2xl max-[960px]:leading-7 max-[670px]:text-lg max-[670px]:leading-5 max-[550px]:text-base max-[550px]:leading-4 max-[490px]:text-sm"

            revealText={<p className="text-white text-5xl leading-14 text-right max-[1155px]:text-3xl max-[960px]:text-2xl max-[960px]:leading-10 max-[670px]:text-xl [670px]:leading-6 max-[550px]:text-lg max-[550px]:leading-6 max-[490px]:text-s"
            >
              Join the Telegram for early drops, rare samples, and custom exclusives made on request. 
              No noise — just raw, direct sound you won’t find anywhere else.
            </p>}

          >
            Grab an official license to use <span className="text-blue-500">Ewenli’s beats</span> — whether you&apos;re dropping singles, albums, or sync deals.
            <span className="text-blue-500"> No gimmicks</span> — just clean rights and industry-grade sound ready to move.
          </MaskContainer>

          <div className="flex gap-5 max-[420px]:flex-col max-[420px]:gap-2">
              <CustomBtn 
                  size="large"
                  color="white"
              >
                  telegram
              </CustomBtn>

              <CustomBtn 
                size="large" 
                color="gray-ghost"
                link="/shop"
              >
                 shop
              </CustomBtn>
          </div>
        </div>
      </section>
      
      {/* Container dedicated to work examples */}
      <section className="w-full flex flex-col gap-[50px] mb-40">
        <h2 
            className={cn('text-6xl w-full text-center text-white', bagel_fat_one.className)}
        >
            My work examples
        </h2>

        <Carousel />
      </section>
    </>
  );
}
