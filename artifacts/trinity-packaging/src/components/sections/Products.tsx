import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Products() {
  const [, navigate] = useLocation();

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading tag="WHAT WE MAKE" title="Our Products" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background rounded-xl overflow-hidden border border-border hover:border-primary shadow-sm hover:shadow-premium-hover transition-all duration-500 cursor-pointer"
              onClick={() => navigate(`/products/${product.slug}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F0F9F6] flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex items-center justify-between bg-white relative z-10">
                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
