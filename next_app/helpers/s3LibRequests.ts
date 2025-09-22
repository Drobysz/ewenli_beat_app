import apiBaseUrl from "./apiBaseUrl";

export async function getBeatImages() {
    try {
        const beatImgs = await fetch(apiBaseUrl + '/api/lib/beat_imgs', {
            method: "GET",
            headers:{
                "Content-Type" : "application/json",
            },
            next: {
                revalidate: 3600
            }
        }).then(res => res.json());

        return beatImgs;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export async function getBeatFiles() {
    try {
        const beatFiles = await fetch(apiBaseUrl + '/api/lib/beat_mp3_files', {
            method: "GET",
            headers:{
                "Content-Type" : "application/json",
            }
        }).then(res => res.json());
        
        return beatFiles;
    } catch (error) {
        console.log(error)
        return [];
    }
}