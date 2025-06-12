export async function changeEmail(token: string, email: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/change-email', {
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                email: email
            }),
            cache: "force-cache",
        });

        return res;
}

export async function changeNickname(token: string, nickname: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/change-nickname', {
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                name: nickname
            }),
            cache: "force-cache",
        });

        return res;
}

export async function changePassword(token: string, password: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/change-password', {
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                password: password
            }),
            cache: "force-cache",
        });

        return res;
}