import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {

    const cookieStore = cookies()

    const res = await fetch(`${process.env.API_URL}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body)
    })

    const data = await res.json()

    cookieStore.set('token', data)

    return NextResponse.json({ data }, {
        status: 201
    })
}