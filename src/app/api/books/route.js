import { NextResponse } from 'next/server';
import { getAllBooks } from '@/lib/books';

export async function GET() {
  return NextResponse.json(getAllBooks());
}
