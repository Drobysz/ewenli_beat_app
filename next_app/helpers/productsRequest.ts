import apiBaseUrl from "./apiBaseUrl";

export async function getCategoryList() {
    const categories = await fetch(apiBaseUrl + '/api/categories', {
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
        const Beats = await fetch(apiBaseUrl + '/api/beats', {
            method: "GET",
            headers:{
                "Content-Type" : "application/json"
            },
            next: {
                revalidate: 3600
            }
        }).then(res => {
            console.log('[SSR] GET /beats status:', res.status, 'url:', apiBaseUrl + '/api/beats');
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
    }
            return res.json()
        });

        return Beats;
    } catch (error) {
        console.log(error)
        return[];
    }
    
}

export async function setProduct(token: string, id: number) {
    fetch(apiBaseUrl + `/api/inventory/${id}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            "Content-Type" : "application/json"
        }
    });
}

export async function getPurchasedProducts(token: string) {
    try {
        const res = fetch(apiBaseUrl + `/api/inventory`, {
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