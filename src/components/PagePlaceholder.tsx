import { Helmet } from "react-helmet-async";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

interface Props {
  name: string;
  title?: string;
  description?: string;
}

const PagePlaceholder = ({ name, title, description }: Props) => {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Helmet>
        <title>{title ?? `${name} | The Speech Coach`}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <SiteNav />
      <section className="flex-1 flex items-center justify-center px-6 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{name}</h1>
          <p className="font-body text-muted-foreground text-lg">Page coming soon</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

export default PagePlaceholder;
