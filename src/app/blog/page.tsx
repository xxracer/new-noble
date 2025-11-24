import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary">
        <section className="py-20 sm:py-28">
          <div className="container text-center">
            <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
              Noble Health Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories about providing the best care for your loved ones.
            </p>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="h-full overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <CardHeader className="p-0">
                    <div className="relative h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.dataAiHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                    <p className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                      Read More &rarr;
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
