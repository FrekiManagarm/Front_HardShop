import { CPU } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`${process.env.API_URL}/api/CPUs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })

    console.log(res, 'res from api')

    const data : CPU[] = await res.json()

    return NextResponse.json(data, {

        status: 200
    })
}

export async function POST(request: Request) {
    const res = await fetch(`${process.env.API_URL}/api/CPU`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data : CPU = await res.json()

    return NextResponse.json(data, {
        status: 201
    })
}