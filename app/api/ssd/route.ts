import { NextResponse } from "next/server";
import { SSD } from "@/types";
import { cookies } from "next/headers";

export const runtime = "edge"

export async function GET() {
    const res = await fetch(`${process.env.API_URL}/api/SSDs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
    })

    const data : SSD = await res.json()

    return NextResponse.json({data}, {
        status: 200
    })
}