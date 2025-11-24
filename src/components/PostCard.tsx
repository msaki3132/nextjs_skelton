// src/components/PostCard.tsx
import Link from 'next/link';
import { Post } from '@/types/post';

type Props = {
  post: Post;
  detailed?: boolean;   // true にすると本文全文＋ユーザーIDを表示
};

export default function PostCard({ post, detailed = false }: Props) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* タイトル */}
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        {detailed ? (
          post.title
        ) : (
          <Link
            href={`/posts/${post.id}`}
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            {post.title}
          </Link>
        )}
      </h2>

      {/* 本文 */}
      <p className="text-gray-700 leading-relaxed">
        {detailed
          ? post.body
          : `${post.body.slice(0, 150)}${post.body.length > 150 ? '...' : ''}`}
      </p>

      {/* 詳細表示のときだけ追加情報 */}
      {detailed && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            User ID: <span className="font-mono">{post.userId}</span>
          </p>
          <p className="text-sm text-gray-500">
            Post ID: <span className="font-mono">{post.id}</span>
          </p>
        </div>
      )}

      {/* 一覧表示のときだけ「続きを読む」リンク */}
      {!detailed && (
        <div className="mt-4">
          <Link
            href={`/posts/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            続きを読む →
          </Link>
        </div>
      )}
    </article>
  );
}
