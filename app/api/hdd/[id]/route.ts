import { HDD } from "@/types"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: {params: {id: number}}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/HDD/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
        cache: "no-cache",
    })

    const data : HDD = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function PUT(request: Request, { params }: {params: {id: number}}) {
    const id = params.id
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get("accessToken")

    const res = await fetch(`${process.env.API_URL}/api/HDD/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request.body)
    })

    const data : HDD = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, { params }: {params: { id: number }}) {
    const id = params.id
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get("accessToken")

    const res = await fetch(`${process.env.API_URL}/api/HDD/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Accept": "application/json"
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}