import { Navbar } from "@/components";
import HDDPage from "@/container/HDDPage/HDDPage";
import { HDD } from "@/types";
import { notFound } from "next/navigation";

async function getHDDs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/hdd`, {
        cache: "no-store",
        method: "GET"
    })

    if (res.status == 404) {
        notFound()
    }

    return await res.json()
}

export default async function HDDList() {

    const hdds : HDD[] = await getHDDs()

    return (
        <>
            <HDDPage hdds={hdds} />
        </>
    )
}