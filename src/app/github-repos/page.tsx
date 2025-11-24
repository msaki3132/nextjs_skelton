// src/app/github-repos/page.tsx
import { getGitHubRepos } from '@/lib/api/github';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

export const metadata = {
  title: 'My GitHub Repos',
  description: 'GitHubのリポジトリ一覧',
};

export default async function GitHubReposPage() {
  const username = process.env.GITHUB_USERNAME || 'your-username'; // ← .env.local で設定推奨
  let repos = [];

  try {
    repos = await getGitHubRepos(username);
  } catch (error) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-red-500">GitHubデータを取得できませんでした</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Github className="w-10 h-10" />
          {username} のリポジトリ
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2">
                    {repo.name}
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                </CardTitle>
                {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
              </div>
              <CardDescription>{repo.description || '説明なし'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {repo.forks_count}
                </div>
              </div>
              {repo.homepage && (
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                    デモを見る
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
