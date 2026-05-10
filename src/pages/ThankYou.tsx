import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const ThankYou = () => {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Helmet>
        <title>Thank You | The Speech Coach</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SiteNav />
      <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Thank <span className="italic text-gradient-gold">you</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Your message has been received. We'll be in touch shortly.
          </p>
          <Link
            to="/"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-6 py-3 rounded-full font-body text-sm"
          >
            Return Home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

export default ThankYou;
