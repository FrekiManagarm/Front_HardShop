import { PSU } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request, {params}: {params: {id: number}}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/PSU`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })

    const data : PSU = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function PUT(request: Request, {params}: {params: {id: number}}) {
    const id = params.id
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/PSU`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : PSU = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, { params }: { params: {id: number} }) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/PSU`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json"
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}