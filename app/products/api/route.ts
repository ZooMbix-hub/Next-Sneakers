import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  /* http://localhost:3000/api?q=___ */
  const query = searchParams.get('q');

  return NextResponse.json({ message: query });
}