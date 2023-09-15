import { GPU } from "@/types"
import { NextResponse } from "next/server"

export const runtime = "edge"

export async function POST(request: Request) {
    const res = await fetch(`${process.env.API_URL}/api/GPU`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data : GPU = await res.json()
    return NextResponse.json(data, {
        status: 201
    })
}