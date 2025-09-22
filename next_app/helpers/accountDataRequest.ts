import apiBaseUrl from "./apiBaseUrl";

export async function changeEmail(token: string, email: string) {
    const res = await fetch(apiBaseUrl + '/api/change-email', {
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
    const res = await fetch(apiBaseUrl + '/api/change-nickname', {
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
    const res = await fetch(apiBaseUrl + '/api/change-password', {
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