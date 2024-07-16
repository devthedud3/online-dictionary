import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface Props {
  word: number;
}

export async function GET(req: NextRequest, context: Props) {
  const url = new URL(req.url);
  //@ts-ignore
  const { word } = context.params;

  try {
    const response = await axios.get(
      `https://www.dictionary.com/browse/${word}`
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
