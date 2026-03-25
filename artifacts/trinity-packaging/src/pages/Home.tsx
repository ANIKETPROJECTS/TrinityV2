import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Machines } from "@/components/sections/Machines";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <Services />
        <Infrastructure />
        <Machines />
        <Team />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
