import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do your coaching sessions work?",
    a: "Sessions are conducted one-on-one, either in person or via video call. Each session is 60–90 minutes, tailored to your specific goals and upcoming speaking engagements.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice a significant shift in confidence and delivery within 3–4 sessions. For event-specific coaching, we can compress this into an intensive programme.",
  },
  {
    q: "What makes your coaching different?",
    a: "We focus on authentic communication, not performance tricks. Our approach combines vocal technique, storytelling frameworks, and presence training — all tailored to your natural style.",
  },
  {
    q: "Do you work with teams or just individuals?",
    a: "Both. We offer individual coaching and bespoke group workshops for teams looking to elevate their collective communication skills.",
  },
  {
    q: "What's the investment?",
    a: "Coaching packages are individually scoped based on your goals and timeline. Get in touch for a conversation about what would work best for you.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4 text-center"
        >
          FAQ's
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground text-center mb-12"
        >
          Can't find the answer?{" "}
          <a href="#cta" className="text-primary hover:underline">
            Let's talk about you
          </a>
        </motion.p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
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
