import { Post } from '@/types/post';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchAllPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE}/posts`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function fetchPostById(id: string): Promise<Post> {
  const res = await fetch(`${API_BASE}/posts/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}
