// src/app/posts/[id]/page.tsx
import { fetchPostById } from '@/lib/fetchPosts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

// OGPや<title>を動的に設定したい場合は generateMetadata を使う
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  try {
    const post = await fetchPostById(params.id);
    return {
      title: `${post.title} | My Blog`,
      description: post.body.slice(0, 160),
    };
  } catch {
    return { title: '投稿が見つかりません' };
  }
}

// メインのページコンポーネント
export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPostById(params.id);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link
        href="/posts"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← 投稿一覧に戻る
      </Link>

      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">User ID: {post.userId}</p>
        <div className="prose max-w-none">
          <p className="whitespace-pre-wrap">{post.body}</p>
        </div>
      </article>
    </div>
  );
}
