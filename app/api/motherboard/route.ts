import { cookies } from "next/headers";
import { MotherBoard } from "@/types";
import { NextResponse } from "next/server";

export const runtime = "edge"

export async function POST(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/MotherBoard`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : MotherBoard = await res.json()

    return NextResponse.json(data, {
        status: 201
    })
}