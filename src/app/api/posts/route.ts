import { NextResponse } from 'next/server';
import { fetchAllPosts } from '@/lib/fetchPosts';

export async function GET() {
  try {
    const posts = await fetchAllPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
