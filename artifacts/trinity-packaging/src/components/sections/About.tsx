import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading tag="WHO WE ARE" title="About Trinity Packaging" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 font-sans text-lg leading-relaxed"
            >
              <p>
                Trinity Packaging is a growing corrugation and packaging manufacturing company established in March 2026, located at Vilholi, Nashik — one of Maharashtra's emerging industrial hubs. We specialize in manufacturing high-quality corrugated boxes and duplex cartons that meet the packaging needs of diverse industries.
              </p>
              <p>
                Our facility is equipped with modern semi-automatic Chinese machinery, enabling efficient production, consistent quality, and timely delivery. We focus on providing durable, cost-effective, and customized packaging solutions that ensure product safety during storage and transportation.
              </p>
              <p>
                Driven by a customer-centric approach, Trinity Packaging emphasizes quality control, operational efficiency, and long-term business relationships. With a skilled workforce, professional management, and strong market orientation, we aim to become a reliable packaging partner for small, medium, and large enterprises across the region.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full bg-muted rounded-2xl overflow-hidden shadow-premium"
          >
            {/* Using a placeholder for the factory interior as requested, styled to look premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10 mix-blend-multiply" />
            {/* about us factory floor */}
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=1000&fit=crop" 
              alt="Factory Floor" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
