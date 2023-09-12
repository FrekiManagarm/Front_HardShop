import { Navbar } from "@/components";
import HDDPage from "@/container/HDDPage/HDDPage";
import { HDD } from "@/types";
import { notFound } from "next/navigation";

async function getHDDs() {
    const res = await fetch(`${process.env.API_URL}/api/hdd`, {
        cache: "no-store",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : HDD[] = await res.json()

    return data
}

export default async function HDDList() {

    const hdds : HDD[] = await getHDDs()

    return (
        <>
            <HDDPage hdds={hdds} />
        </>
    )
}