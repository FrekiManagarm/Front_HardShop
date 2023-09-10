import { HDD } from "@/types"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch(`${process.env.API_URL}/api/HDDs`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })

    const data : HDD[] = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function POST(request: Request) {

    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/HDD`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : HDD = await res.json()

    return NextResponse.json(data, {
        status: 201
    })
}