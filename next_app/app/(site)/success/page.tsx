'use client'

// Components
import { FullScreenSpin } from "@/components";
import { InventoryPage } from "./InventoryPage";
import { Suspense } from "react";


export default function Page (){
    

    return(
        <Suspense fallback={<FullScreenSpin />}>
            <InventoryPage />
        </Suspense>
    );
}