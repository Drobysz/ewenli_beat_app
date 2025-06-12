export async function getBasketContent(token: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/basket', {
        method: "GET",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

    return res;
}

export async function setProductToBasket(token: string, idx: number) {
    fetch(process.env.NEXT_PUBLIC_DOMAIN! + `/api/basket/${idx}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
}

export async function deleteProductFromBasket(token: string, idx: number) {
    fetch(process.env.NEXT_PUBLIC_DOMAIN! + `/api/basket/${idx}`, {
        method: "DELETE",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
}