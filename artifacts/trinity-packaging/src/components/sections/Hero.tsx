import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const VIDEOS = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
  "/videos/7.mp4",
];

const TYPEWRITER_TEXT =
  "Manufacturers of Premium Corrugated Boxes & Duplex Cartons — Vilholi, Nashik";

function useTypewriter(text: string, speed = 40, startDelay = 1200, pauseAfter = 3000) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"waiting" | "typing" | "pausing">("waiting");

  // Initial delay before first type
  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (phase === "typing") {
      if (displayed.length < text.length) {
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        // Finished typing — pause then reset
        setPhase("pausing");
      }
    }
    if (phase === "pausing") {
      const t = setTimeout(() => {
        setDisplayed("");
        setPhase("typing");
      }, pauseAfter);
      return () => clearTimeout(t);
    }
  }, [displayed, phase, text, speed, pauseAfter]);

  return displayed;
}

export function Hero() {
  // Double-buffer: two persistent video elements swap between "active" and "preloading"
  const [active, setActive] = useState(0); // 0 or 1 — which buffer is currently visible
  const refA = useRef<HTMLVideoElement>(null); // buffer 0
  const refB = useRef<HTMLVideoElement>(null); // buffer 1
  const seqRef = useRef(0); // index into VIDEOS currently playing in active buffer

  const typewriterText = useTypewriter(TYPEWRITER_TEXT);

  // On mount: start video 0 in buffer A, preload video 1 in buffer B
  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (a) { a.src = VIDEOS[0]; a.load(); a.play().catch(() => {}); }
    if (b) { b.src = VIDEOS[1]; b.load(); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnded = useCallback(() => {
    setActive((prev) => {
      const nextActive = 1 - prev;
      const nextSeq = (seqRef.current + 1) % VIDEOS.length;
      seqRef.current = nextSeq;

      const nextBuf = nextActive === 0 ? refA.current : refB.current;
      const idleBuf = nextActive === 0 ? refB.current : refA.current;

      // Play preloaded buffer immediately
      if (nextBuf) nextBuf.play().catch(() => {});

      // Preload the video after next into the now-idle buffer
      const afterNext = (nextSeq + 1) % VIDEOS.length;
      if (idleBuf) {
        idleBuf.pause();
        idleBuf.currentTime = 0;
        idleBuf.src = VIDEOS[afterNext];
        idleBuf.load();
      }

      return nextActive;
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Double-buffered background videos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <video
          ref={refA}
          muted
          playsInline
          preload="auto"
          onEnded={active === 0 ? handleEnded : undefined}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-200 ${active === 0 ? "opacity-100" : "opacity-0"}`}
        />
        <video
          ref={refB}
          muted
          playsInline
          preload="auto"
          onEnded={active === 1 ? handleEnded : undefined}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-200 ${active === 1 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-sans">
              Based in Vilholi, Nashik
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9] mb-8"
          >
            Packaging That{" "}
            <span className="text-primary block mt-2">Protects.</span>{" "}
            Quality That Speaks.
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-white font-sans max-w-2xl mb-12 leading-relaxed min-h-[2.5rem]"
          >
            {typewriterText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle animate-pulse" />
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-accent rounded-none transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-primary"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
