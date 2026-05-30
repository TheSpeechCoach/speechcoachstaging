import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

interface LegalPageProps {
  title: string;
  markdownContent: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
}

const LegalPage = ({ title, markdownContent, metaTitle, metaDescription, slug }: LegalPageProps) => {
  const canonical = `https://www.thespeech.coach/${slug}`;

  // Strip a leading top-level # heading since the hero already shows the title.
  const content = markdownContent.replace(/^\s*#\s+.*\n+/, "");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <SiteNav />

      <main className="flex-1">
        {/* Hero band */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
          </div>
          <div className="container relative z-10 mx-auto px-6 max-w-4xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary/80 mb-6">
              Legal
            </p>
            <h1 className="font-display font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-gradient-gold">
              {title}
            </h1>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>
        </section>

        {/* Body */}
        <section className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
          <article className="legal-prose prose prose-lg prose-invert max-w-none
            prose-headings:font-display prose-headings:tracking-tight
            prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-foreground
            prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-h3:text-foreground
            prose-p:leading-relaxed prose-p:text-muted-foreground
            prose-li:leading-relaxed prose-li:text-muted-foreground
            prose-ul:my-4 prose-ol:my-4 prose-li:my-2
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/90
            prose-hr:border-border
            prose-table:border-collapse prose-table:w-full
            prose-th:border prose-th:border-border prose-th:bg-secondary prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-foreground
            prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-muted-foreground
            prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default LegalPage;
