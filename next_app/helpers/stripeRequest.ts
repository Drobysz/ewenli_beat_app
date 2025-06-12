export async function createStripeSession(stripe_price_id: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/create-checkout-session', {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            stripe_price_id: stripe_price_id
        })
    }).then(res => res.json());

    return res.url;
}