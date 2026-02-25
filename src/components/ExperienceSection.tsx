import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Tech Solutions Pvt Ltd",
    duration: "Jun 2024 – Aug 2024",
    points: [
      "Developed REST APIs using Flask, reducing response time by 25%.",
      "Automated data cleaning pipeline using Python, saving 10 hours/week.",
      "Built interactive dashboards with Pandas and Matplotlib for stakeholder reporting.",
    ],
  },
  {
    role: "ML Research Intern",
    company: "P S R R College of Engineering",
    duration: "Jan 2024 – May 2024",
    points: [
      "Implemented classification models achieving 89% accuracy on healthcare datasets.",
      "Preprocessed 50K+ records using NumPy and Pandas for feature engineering.",
      "Presented findings to faculty, receiving commendation for methodology.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-section-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            <span className="text-secondary">Work</span> Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-primary-subtle" />

                <div className="bg-background/60 border border-border rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full self-start">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 text-xs">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
