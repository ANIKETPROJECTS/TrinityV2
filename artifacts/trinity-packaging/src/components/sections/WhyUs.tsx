import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";
import * as Icons from "lucide-react";

export function WhyUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading tag="OUR ADVANTAGE" title="Why Choose Us" className="mb-0" />
          <p className="mt-6 text-foreground/70 max-w-3xl text-lg leading-relaxed">
            At Trinity Packaging, we believe packaging is more than protection — it is a reflection of quality, reliability, and brand value. Our manufacturing processes are designed to deliver consistent performance while maintaining cost efficiency for our customers. We combine modern machinery, skilled manpower, and disciplined operations to meet evolving market demands. Our strategic location in Nashik enables faster logistics and better service to nearby industrial clusters.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {FEATURES.map((feature, index) => {
            const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-premium-hover transition-all duration-300 border border-border/50 hover:border-primary/30 group"
              >
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display tracking-wide mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
