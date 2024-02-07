import { NextResponse } from "next/server";
export async function GET(){

    try {
        const response = NextResponse.json(
            {
                message:'Logout Successfully',
                success:true
            }

        )
        response.cookies.delete('mafeya',{maxAge:0,expires: new Date(0)})
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
        return response
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}


