import { createPaymentIntent } from "@/lib/externalRequests/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const { price,currency, description, metadata } = await req.json()
        const { client_secret } = await createPaymentIntent({ price,currency, description, metadata })
        return NextResponse.json({ secret: client_secret });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

