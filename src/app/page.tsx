import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BottomCTA from "@/components/BottomCTA";
import TrustBar from "@/components/TrustBar";
import { ar } from "@/lib/translations";

export default function Home() {
  const t = ar;

  return (
    <>
      <Hero t={t} />
      <Features t={t} />
      <Testimonials t={t} />
      <Screenshots t={t} />
      <Pricing t={t} />
      <FAQ t={t} />
      <Contact t={t} />
      <TrustBar t={t} />
      <BottomCTA t={t} />
    </>
  );
}
