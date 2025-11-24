// src/components/PostList.tsx
import { Post } from '@/types/post';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostList({ posts }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
