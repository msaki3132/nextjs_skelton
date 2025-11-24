import { fetchAllPosts } from '@/lib/fetchPosts';
import PostList from '@/components/PostList';

export const metadata = { title: '投稿一覧' };

export default async function PostsPage() {
  const posts = await fetchAllPosts();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">投稿一覧（SSR）</h1>
      <PostList posts={posts} />
    </div>
  );
}
