import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/data/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 sm:py-32 bg-primary text-white">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.dataAiHint}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container relative z-10 text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              {post.category}
            </Badge>
            <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {post.description}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-background">
          <div className="container max-w-4xl mx-auto">
            <article className="prose lg:prose-xl max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="font-headline text-2xl font-bold mt-8 mb-4">{paragraph.substring(4)}</h3>
                  }
                  return <p key={index}>{paragraph}</p>
              })}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
