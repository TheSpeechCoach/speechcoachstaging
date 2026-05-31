import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How do your coaching sessions work?",
    a: "Sessions are conducted one-on-one or in group settings, either in person at our London headquarters or via video call. Each session is tailored to your specific goals, whether preparing for a keynote, refining vocal tone, or improving on-camera communication. Online coaching is available Monday to Friday, 24 hours a day, across time zones.",
  },
  {
    q: "Who do you typically work with?",
    a: "Our clients include executives, founders, leaders, media professionals, public figures, content creators, actors, and social media influencers — individuals whose work depends on clear expression, confident delivery, and authentic presence.",
  },
  {
    q: "How quickly will I see results?",
    a: "We would expect to see measurable improvement in clarity, confidence, and delivery within the first few sessions. For event-specific coaching, we can compress this into an intensive programme designed around your timeline.",
  },
  {
    q: "What makes your coaching different?",
    a: "Our approach integrates the science of speech and voice with the discipline of performance, combining over 30 years of professional experience with evidence-informed techniques from communication science, performance training, and clinical voice practice.",
  },
  {
    q: "Do you offer accredited courses?",
    a: "Yes. Our Public Speaking workshops and programmes are accredited by the CPD Certification Service. All accredited courses meet globally recognised standards for professional development and deliver transformative, measurable outcomes.",
  },
  {
    q: "Can you work with my team?",
    a: "Absolutely. We offer bespoke group workshops for organisations and leadership teams. These can be delivered in person at our London HQ, on-site at your offices, or online.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4 text-center"
        >
          FAQ's
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground text-center mb-8"
        >
          Can't find the answer?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <Link
            to="/book-now"
            className="inline-block bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-8 py-3 rounded-full font-body text-sm tracking-wide glow-gold"
          >
            Book a Consultation
          </Link>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="font-body text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
