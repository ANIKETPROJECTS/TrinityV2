import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MACHINES } from "@/lib/constants";

export function Machines() {
  return (
    <section id="machines" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading tag="EQUIPMENT" title="Our Machines" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MACHINES.map((machine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-xl overflow-hidden border border-border bg-background hover:shadow-premium transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img 
                  src={machine.image} 
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <div className="p-5 flex-1 flex items-center justify-center border-t border-border group-hover:border-primary/50 transition-colors">
                <h4 className="font-display text-lg font-bold text-center text-foreground group-hover:text-primary transition-colors">
                  {machine.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
