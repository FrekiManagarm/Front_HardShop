import { RAM } from "@/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: {params: { id: number }}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/RAM/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })

    const data : RAM = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function PUT(request: Request, { params }: { params: { id: number }}) {
    const id = params.id
    const cookieStore = cookies()
    const accessToken = cookieStore.get("accessToken")

    const res = await fetch(`${process.env.API_URL}/api/RAM/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : RAM = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, { params }: {params: { id: number }}) {
    const id = params.id
    const cookieStore = cookies()
    const accessToken = cookieStore.get("accessToken")

    const res = await fetch(`${process.env.API_URL}/api/RAM/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}