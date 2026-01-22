"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {CancelTitle} from "./components/CancelTitle";
import cn from "classnames";

export default function FailedPaymentPage () {
    const router = useRouter();

    useEffect(() => {
        const failedTime = setTimeout(() => {
            console.log("Redirecting after 5s...");
            router.push("/");
        }, 5000);

        return () => clearTimeout(failedTime);
    }, []);

    return (
        <main className={cn(
            "h-screen flex",
            "justify-center items-center"
        )}>
            <CancelTitle>
                Payment failed. Redirecting...
            </CancelTitle>
        </main>
    );
};