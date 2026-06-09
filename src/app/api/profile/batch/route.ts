import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {

        const body = await req.json();

        const addresses: string[] = body.addresses || [];

       

        return NextResponse.json({
            ok: true,
           
        });

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            {
                ok: false,
            },
            {
                status: 500,
            }
        );
    }
}
