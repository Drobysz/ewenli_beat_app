'use client'

// Components
import { FullScreenSpin } from "@/components"

// Nav
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// Context
import { AppContext } from "@/app/context/app.context";

// Hooks
import { Suspense, useContext, useEffect } from "react";

// Fetch function
import { setProduct } from "@/helpers/productsRequest";


export const InventoryPage = ()=> {
    const router = useRouter();
    const { token } = useContext(AppContext);
    const searchParams = useSearchParams();
    const productId = searchParams.get("product_id");

    useEffect(()=>{
        setProduct(token!, Number(productId));
        router.push('/shop');
    }, [token]);

    if (!token || !productId)
        return <FullScreenSpin />;

    return (
        <Suspense fallback={<FullScreenSpin />} />
    );
};