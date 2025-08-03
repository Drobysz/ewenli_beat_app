// Components
import { FullScreenSpin } from "@/components"

// Nav
import { redirect } from "next/navigation";

// Hooks
import { Suspense } from "react";

// Fetch function
import { setProduct } from "@/helpers/productsRequest";
import { validatePurchase } from "@/helpers/stripeRequest";
import { getSessionData } from "@/app/actions/sesssions";

// Props
import { UserSession } from "@/interfaces/UserData.interface";


export default async function PaymentCheckingPage ({
    searchParams
}: {
    searchParams: Promise<{ session_id: string, price_id: string }>
}) {

    const sessionData: UserSession | undefined = await getSessionData(); 
    const { session_id, price_id } = await searchParams;

    if ( sessionData === undefined || !sessionData?.token || !price_id ) {
        return null;
    }

    const token = sessionData.token!
    const isValid = await validatePurchase(session_id);

    if (isValid) {
        await setProduct(token, Number(price_id));
        redirect('/inventory');
    } else {
        redirect('/cancel');
    }

    return (
        <Suspense fallback={<FullScreenSpin />} />
    );
};