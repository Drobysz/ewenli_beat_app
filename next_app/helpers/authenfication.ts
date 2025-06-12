export async function login(email: string, password: string) {
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
    });

        return res;
}

export async function register(name: string, email: string, password: string, password_confirmation: string) {
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
    });

    return res;
}

export async function logOut(token: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/logout', {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    return res;
}