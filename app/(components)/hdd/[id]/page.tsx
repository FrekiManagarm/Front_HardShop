import { Navbar } from "@/components";
import HDDDetailsPage from "@/container/HDDPage/HDDDetailsPage";
import { HDD } from "@/types";

async function getHDD(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/hdd/${id}`, {
        cache: "no-cache",
    })

    return res.json()
}

export default async function HDDDetails({ params }: {params: {id: number}}) {

    const hdd : HDD = await getHDD(params.id)

    return (
        <>
            <HDDDetailsPage hdd={hdd} />
        </>
    )
}