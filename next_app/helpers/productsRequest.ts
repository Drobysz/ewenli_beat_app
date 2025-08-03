export async function getCategoryList() {
    const categories = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/categories', {
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        },
        next: {
            revalidate: 3600
        }
    }).then(res => res.json());

    return categories;
}

export async function getProducts() {
    try {
        const Beats = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/beats', {
            method: "GET",
            headers:{
                "Content-Type" : "application/json"
            },
            next: {
                revalidate: 3600
            }
        }).then(res => res.json());

        return Beats;
    } catch (error) {
        console.log(error)
        return[];
    }
    
}

export async function setProduct(token: string, id: number) {
    fetch(process.env.NEXT_PUBLIC_DOMAIN! + `/api/inventory/${id}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            "Content-Type" : "application/json"
        }
    });
}

export async function getPurchasedProducts(token: string) {
    try {
        const res = fetch(process.env.NEXT_PUBLIC_DOMAIN! + `/api/inventory`, {
            method: "GET",
            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            next: {
                revalidate: 0
            }
        }).then(res => res.json());

    return res;
    } catch (error) {
        console.log(error)
        return undefined;
    }
    
}