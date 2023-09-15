import { NextResponse } from "next/server";
import { SSD } from "@/types";
import { cookies } from "next/headers";

export const runtime = "edge"

export async function POST(request: Request) {
    const res = await fetch(`${process.env.API_URL}/api/SSD`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data : SSD = await res.json()

    return NextResponse.json({ data }, {
        status: 201
    })
}