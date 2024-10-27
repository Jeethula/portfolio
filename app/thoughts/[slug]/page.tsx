import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { thoughts } from "@/lib/data";

export async function generateStaticParams() {
  return thoughts.map((thought) => ({
    slug: thought.slug,
  }));
}

export default function ThoughtPage({ params }: { params: { slug: string } }) {
  const thought = thoughts.find(t => t.slug === params.slug);

  if (!thought) {
    notFound();
  }

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8 group">
          <Link href="/#thoughts" className="flex items-center">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Thoughts
          </Link>
        </Button>
        
        <div className="space-y-8">
          <div className="relative rounded-xl h-[400px] overflow-hidden">
            <Image
              src={thought.image}
              alt={thought.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                {thought.date}
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full text-primary text-sm">
                {thought.category}
              </span>
            </div>
            
            <h1 className="font-bold text-4xl">{thought.title}</h1>
            
            <p className="text-muted-foreground text-xl leading-relaxed">
              {thought.excerpt}
            </p>
          </div>
          
          <div className="max-w-none dark:prose-invert prose prose-lg">
            {thought.content}
          </div>
        </div>
      </div>
    </main>
  );
}
