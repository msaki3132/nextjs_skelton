// src/components/Footer.tsx
import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                N
              </div>
              MyApp
            </div>
            <p className="text-sm text-muted-foreground">
              Next.js 14 + shadcn/ui で作られた<br />モダンで高速なウェブアプリ
            </p>
          </div>

          {/* リンク */}
          <div>
            <h3 className="font-semibold mb-4">リンク</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="/posts" className="hover:text-foreground transition">投稿一覧</Link></li>
              <li><Link href="/github-repos" className="hover:text-foreground transition">GitHub</Link></li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="font-semibold mb-4">フォローする</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
