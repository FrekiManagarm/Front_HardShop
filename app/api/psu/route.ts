import { PSU } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const res = await fetch(`${process.env.API_URL}/api/PSUs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        next: {
            revalidate: 0
        }
    })

    const data : PSU[] = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function POST(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get("accessToken")

    const res = await fetch(`${process.env.API_URL}/api/PSU`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request.body)
    })

    const data : PSU = await res.json()
}