import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getHeroVariant } from "@/data/heroVariants";

const LostHero = () => {
  const { variant, slug } = useParams<{ variant: string; slug: string }>();
  const entry = slug ? getHeroVariant(slug) : undefined;

  if (!entry || (variant !== "3" && variant !== "4")) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main className="container mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-3xl">Hero variant not found</h1>
          <Link to="/" className="text-primary underline mt-6 inline-block">
            Back home
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const lines = variant === "3" ? entry.threeLine : entry.fourLine;
  const subheading =
    variant === "3" ? entry.threeLineSubheading : entry.fourLineSubheading;
  const isHomepageSpecial = entry.slug.startsWith("homepage-");
  const appendNowHere = !isHomepageSpecial;
  // The final array line is climactic gold-italic
  const finalLineIndex = lines.length - 1;

  const metaTitle = `${entry.title} — ${variant === "3" ? "3-line" : "4-line"} hero | The Speech Coach`;
  const metaDescription = subheading;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://speechcoachstaging.lovable.app/hero/${variant}/${entry.slug}`}
        />
      </Helmet>
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            {lines.map((line, i) => {
              const isGold = i === finalLineIndex;
              return (
                <motion.span
                  key={`${entry.slug}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`block ${isGold ? "italic text-gradient-gold" : ""}`}
                >
                  {line}
                </motion.span>
              );
            })}
            {appendNowHere && (
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block italic text-gradient-gold"
              >
                Now you're here.
              </motion.span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="font-body text-lg sm:text-xl text-muted-foreground mt-10 max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
            className="mt-12"
          >
            <a
              href="#cta"
              className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 py-3 rounded-full font-body text-sm tracking-wide"
            >
              Book a Free Consultation
            </a>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default LostHero;
