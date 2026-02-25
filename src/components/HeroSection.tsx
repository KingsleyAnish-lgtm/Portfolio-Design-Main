import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpeg";
import resumeFile from "@/assets/Kingsley Anish Resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              AI & Data Science Engineer
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              I'm{" "}
              <span className="text-gradient">Kingsley</span>
              <br />
              Anish
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              I build scalable data-driven systems that transform complex data
              into actionable insights. Specializing in Python-based pipelines
              and machine learning workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-shadow"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href={resumeFile}
                download="Kingsley_Anish_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Hexagonal glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              <div className="relative w-64 h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-[26rem] overflow-hidden rounded-2xl border-2 border-primary/30">
                <img
                  src={profileImage}
                  alt="Kingsley Anish - AI & Data Science Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
