"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
        <main className="h-[100vh] flex justify-center items-center">
            <h1 className="text-zinc-700 text-7xl max-[1060px]:text-6xl max-[780px]:text-4xl max-[520px]:text-2xl">
                Payment failed. Redirecting...
            </h1>
        </main>
    );
};