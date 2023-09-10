import { CPU } from "@/types"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: {params: {id: number}}) {
    const id = params.id

    try {
        const res = await fetch(`${process.env.API_URL}/api/CPU/${id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })

        const data = await res.json()

        return NextResponse.json(data, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error when fetching CPU",
            error: error
        })
    }
}

export async function PUT(request: Request, { params }: {params: {id: number}}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/CPU/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })

    const data : CPU = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, { params }: { params: {id: number} }) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/Cooling/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}