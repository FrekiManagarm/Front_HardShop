import { cookies } from "next/headers"
import { useRouter } from "next/router"

const getSWRData = (API_URL: string | undefined, path: string) => {
    const router = useRouter()
    const { locale } = router
    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')

    const settings = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Accept": "application/json",
        }
    }

    async function fetcher(path: string) {
        const res = await fetch(API_URL + path, settings)

        if (!res.ok) throw new Error(res.statusText)

        const json = await res.json()

        return json
    }

    return fetcher
}

export default getSWRData