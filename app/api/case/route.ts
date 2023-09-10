import { Case } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    try {
        const res = await fetch(`${process.env.API_URL}/api/Boitiers`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "GET",
        });

        const data: Case[] = await res.json()

        return NextResponse.json(data, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error when fetching Case",
            error: error
        })
    }
}

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