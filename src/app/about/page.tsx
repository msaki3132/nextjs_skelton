// src/app/about/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Rocket, 
  Zap, 
  Shield, 
  Palette, 
  Code2, 
  Github, 
  Globe,
  Layers
} from 'lucide-react';

export const metadata = {
  title: 'About | My Awesome App',
  description: 'Next.js 14 + shadcn/ui + Tailwind CSS で作られたモダンアプリケーション',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-24">
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Rocket className="w-4 h-4 mr-1" />
              Next.js 14 + App Router
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              We build with the 
              <span className="text-primary"> modern stack</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              shadcn/ui + Tailwind CSS + TypeScript + Next.js 14 App Router で作られた、
              高速・美しく・拡張性抜群のウェブアプリケーションです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" asChild>
                <Link href="/posts">
                  <Zap className="mr-2 h-5 w-5" />
                  投稿一覧を見る
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/yourusername/your-repo" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why we love this stack</h2>
            <p className="text-xl text-muted-foreground">最高の開発体験と最高のパフォーマンスを両立</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Layers className="w-10 h-10" />}
              title="App Router & Server Components"
              description="Next.js 14 の最新機能フル活用。SSR/SSG/ISR が自由自在。"
            />
            <FeatureCard
              icon={<Palette className="w-10 h-10" />}
              title="shadcn/ui"
              description="完全に自分のコード。デザインも挙動も100%カスタマイズ可能。"
            />
            <FeatureCard
              icon={<Code2 className="w-10 h-10" />}
              title="TypeScript First"
              description="厳密な型定義でバグを未然に防ぎ、大規模開発でも安心。"
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Blazing Fast"
              description="Edge Runtime + React Server Components で爆速体験。"
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Accessibility"
              description="Radix UI ベースで WCAG 準拠。誰にとっても使いやすい。"
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="src/ + @/ alias"
              description="絶対パスでインポート。フォルダが深くなっても迷わない。"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">このテンプレートを使ってみる？</CardTitle>
              <CardDescription className="text-lg">
                5分で同じ環境が作れます
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss-app-dir">
                    Next.js 公式テンプレート
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="https://ui.shadcn.com">
                    shadcn/ui 公式サイトへ
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

// 再利用可能なカードコンポーネント
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
