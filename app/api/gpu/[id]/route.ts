import { GPU } from "@/types"
import { NextResponse } from "next/server"

export const runtime = "edge"

export async function PUT(request: Request, {params}: {params: {id: number}}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/GPU/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data : GPU = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, {params}: {params: {id: number}}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/GPU/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json"
        },
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}