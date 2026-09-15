import { NextResponse } from "next/server";
import { recommend } from "@/lib/recommender";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await recommend(body);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}