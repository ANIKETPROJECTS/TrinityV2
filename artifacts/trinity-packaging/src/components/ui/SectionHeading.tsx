import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ tag, title, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className={cn("h-px w-12", light ? "bg-primary-foreground/50" : "bg-primary")} />
        <span className={cn("font-display tracking-widest text-sm font-semibold", light ? "text-primary-foreground/80" : "text-primary")}>
          {tag}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn("text-4xl md:text-5xl lg:text-6xl text-balance", light ? "text-white" : "text-foreground")}
      >
        {title}
      </motion.h2>
    </div>
  );
}
