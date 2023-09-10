import { NextResponse } from "next/server";
import { SSD } from "@/types";
import { cookies } from "next/headers";

export async function GET() {
    const res = await fetch(`${process.env.API_URL}/api/SSDs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
    })
}

export async function POST(request: Request) {

}