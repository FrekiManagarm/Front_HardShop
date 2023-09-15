import { Case } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export const runtime = "edge"

export async function POST(request: Request) {

    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/Boitiers`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : Case = await res.json()
    
    return NextResponse.json(data, {
        status: 201
    })
}