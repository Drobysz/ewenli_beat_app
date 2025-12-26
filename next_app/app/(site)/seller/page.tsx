import metaData from "@/metadata/metadata.json";
import { ScrollPBlock } from "@/components/index";
import {
    LiquidBackground,
    SellerTitle,
    LiquidBorderFrame,
    MaskotZone,
    AchievmentsZone
} from "./page/index";

export async function generateMetadata(){
  return {
    title: metaData.seller.title,
    description: metaData.seller.description,
  };
};

export default function Page (){
    return (
        <>
            {/* Intro liquid background */}
            <LiquidBackground />
            <SellerTitle />
            <LiquidBorderFrame />

            {/* The left page */}
            <MaskotZone />
            <AchievmentsZone />
            <ScrollPBlock />
        </>
    );
};
