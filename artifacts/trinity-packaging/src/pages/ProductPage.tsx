import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const product = PRODUCTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Product not found.</p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-foreground overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#009874 1px, transparent 1px), linear-gradient(90deg, #009874 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Teal accent blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary/8 blur-2xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-10 font-display tracking-wide"
          >
            <button
              onClick={() => navigate("/")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => { navigate("/"); setTimeout(() => { document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }, 100); }}
              className="hover:text-primary transition-colors"
            >
              Products
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{product.name}</span>
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-primary tracking-widest text-xs font-semibold uppercase">
              Our Products
            </span>
          </motion.div>

          {/* Product name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none mb-6"
          >
            {product.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-primary font-display font-semibold text-lg md:text-xl tracking-wide mb-10"
          >
            {product.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <button
              onClick={() => { navigate("/"); setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 100); }}
              className="inline-flex items-center gap-2 bg-primary text-white font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </button>
          </motion.div>
        </div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* Detail content */}
      <main className="flex-grow">

        {/* Description + Features */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — description */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-primary" />
                  <span className="font-display text-primary tracking-widest text-xs font-semibold uppercase">
                    About This Product
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                  What Is the {product.name}?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </motion.div>

              {/* Right — specifications */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-primary" />
                  <span className="font-display text-primary tracking-widest text-xs font-semibold uppercase">
                    Specifications
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                  Key Features
                </h2>
                <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 px-6 py-4 bg-card">
                      <span className="text-sm font-display font-semibold text-muted-foreground w-36 shrink-0 pt-0.5">
                        {f.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">{f.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 md:py-24 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-primary tracking-widest text-xs font-semibold uppercase">
                  Applications
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
                When Is It Used?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-sm transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-2">
                  Need the {product.name}?
                </h2>
                <p className="text-white/80 text-lg">
                  Get a custom quote tailored to your specifications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  onClick={() => { navigate("/"); setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 100); }}
                  className="bg-white text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => { navigate("/"); setTimeout(() => { document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }, 100); }}
                  className="border-2 border-white text-white font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-white/10 transition-colors"
                >
                  View All Products
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other products */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-primary tracking-widest text-xs font-semibold uppercase">
                  Explore More
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
                Other Products
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {PRODUCTS.filter((p) => p.slug !== slug).slice(0, 4).map((p, i) => (
                <motion.button
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  onClick={() => navigate(`/products/${p.slug}`)}
                  className="group text-left p-5 border border-border rounded-xl bg-card hover:border-primary hover:shadow-sm transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F0F9F6] rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                    {p.name}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
