import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Brain } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "India" },
  { icon: GraduationCap, label: "B.Tech. in AI & Data Science" },
  { icon: Briefcase, label: "Open to Opportunities" },
  { icon: Brain, label: "ML & Data Pipelines" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            <span className="text-secondary">About</span> Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I am an AI & Data Science engineer with a Bachelor's degree from
                P S R R College of Engineering. I have a strong foundation in
                Java programming, SQL databases, and Python-based data pipelines.
                My focus is on building predictive models and scalable backend
                systems that solve real-world problems using data-driven
                decision-making.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With hands-on internship experience and multiple projects, I
                bring practical problem-solving skills and a detail-oriented
                approach to every challenge I take on.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-border"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
