// src/lib/api/github.ts
export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      // 認証トークンがあるなら .env.local に置くのがベスト
      // Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 }, // 1時間キャッシュ
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data: any[] = await res.json();

  return data
    .filter((repo) => !repo.fork) // フォーク除外
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
    }));
}
