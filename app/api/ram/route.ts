import { RAM } from "@/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "edge"

export async function POST(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/RAM`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : RAM = await res.json()

    return NextResponse.json(data, {
        status: 201
    })
}