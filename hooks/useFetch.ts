export default async function useFetch(path: string, method: string, access_token: string, body: any) {
    const res = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(body),
        cache: "no-cache",
    });

    return await res.json()
}

async function reFetch() {
    
}