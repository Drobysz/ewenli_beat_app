export async function logInQuery(email: string, password: string) {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/login', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json());

        return res;
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error.message
        }

        return String(error);
    }
}

export async function regQuery(name: string, email: string, password: string, password_confirmation: string) {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/register', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            })
        }).then(res => res.json());

        return res;
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error.message; 
        }

        return String(error);
    }
}

export async function logOutQuery(token: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/logout', {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    return res;
}