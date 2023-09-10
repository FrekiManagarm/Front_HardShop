import { CPU } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/CPUs`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })

        const data : CPU[] = await res.json()

        return NextResponse.json(data, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error when fetching CPUs",
            error: error
        })
    }
}

export async function POST(request: Request) {
    try {
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
    } catch (error) {
        return NextResponse.json({
            message: "Error when creating CPU",
            error: error
        })
    }
}