export async function getBeatImages() {
    try {
        const beatImgs = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/lib/beat_imgs', {
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
        const beatFiles = await fetch(process.env.NEXT_PUBLIC_DOMAIN! + '/api/lib/beat_mp3_files', {
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