import { NextResponse } from "next/server"


export async function POST (req: Request) {
  try {
    const { email, password } = await req.json()
    console.log(email , password);
  }
  catch (e) {
    return NextResponse.json({error:"Invalid body"}, {status:400})
  }
}