import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import LearningCenter from "@/components/LearningCenter";
import Articles from "@/components/Articles";
import Documentation from "@/components/Documentation";
import MadeBy from "@/components/MadeBy";
import CodeLovers, { codeLoversFaqs } from "@/components/CodeLovers";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: codeLoversFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main>
        <Hero />
        <Stats />
        <Products />
        <WhyChoose />
        <LearningCenter />
        <Articles />
        <Documentation />
        <CodeLovers />
        <MadeBy />
      </main>
      <Footer />
    </>
  );
}


