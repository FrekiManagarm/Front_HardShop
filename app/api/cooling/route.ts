import { Cooling } from "@/types"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/Coolings`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })

        const data : Cooling[] = await res.json()

        return NextResponse.json(data, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Error when fetching cooling',
            error: error
        })
    }
}

export async function POST(request: Request) {

    const res = await fetch(`${process.env.API_URL}/api/Cooling`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data: Cooling = await res.json()

    return NextResponse.json(data, {
        status: 201
    })
}