import { PSU } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "edge"

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