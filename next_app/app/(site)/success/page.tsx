// Components
import { FullScreenSpin } from "@/components"

// Nav
import { redirect } from "next/navigation";

// Hooks
import { Suspense } from "react";

// Fetch function
import { setProduct } from "@/helpers/productsRequest";
import { getSessionData } from "@/app/actions/sesssions";

// Props
import { UserSession } from "@/interfaces/UserData.interface";


export default async function PaymentCheckingPage ({
    searchParams
}: {
    searchParams: Promise<{ product_id: string }>
}) {

    const sessionData: UserSession | undefined = await getSessionData(); 
    const { product_id } = await searchParams;

    if ( sessionData === undefined || !sessionData?.token || !product_id ) {
        return null;
    }

    const token = sessionData.token!

    setProduct(token, Number(product_id));
    redirect('/inventory');

    return (
        <Suspense fallback={<FullScreenSpin />} />
    );
};