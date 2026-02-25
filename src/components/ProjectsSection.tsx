import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    summary:
      "Built a real-time analytics dashboard that visualizes ML model predictions for business KPIs.",
    problem: "Manual reporting caused 48-hour delays in decision-making.",
    solution:
      "Automated data pipeline with Flask API and React frontend for live insights.",
    tech: ["Python", "Flask", "React", "MongoDB", "Scikit-learn"],
    results: ["Reduced reporting time by 90%", "Improved accuracy to 91%"],
    live: "#",
    code: "#",
  },
  {
    title: "Smart Inventory System",
    summary:
      "ML-powered inventory management system that predicts stock requirements using historical data.",
    problem: "Overstocking and stockouts costing 15% revenue loss.",
    solution:
      "Time-series forecasting model with automated reorder alerts.",
    tech: ["Python", "TensorFlow", "SQL", "Flask", "Docker"],
    results: ["40% reduction in overstock", "Saved ₹2L/month in costs"],
    live: "#",
    code: "#",
  },
  {
    title: "Resume Parser & Ranker",
    summary:
      "NLP-based tool that parses resumes and ranks candidates based on job description matching.",
    problem: "HR teams spending 20+ hours screening resumes manually.",
    solution:
      "Built NLP pipeline with spaCy for entity extraction and cosine similarity ranking.",
    tech: ["Python", "spaCy", "Pandas", "Flask", "HTML/CSS"],
    results: ["10x faster screening", "85% match accuracy"],
    live: "#",
    code: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">My</span> Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            A selection of projects demonstrating my expertise in AI, data
            science, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl bg-card border border-border p-6 hover:bg-card-hover hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.summary}
              </p>

              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-primary mb-2 font-semibold">
                  Results
                </p>
                <ul className="space-y-1">
                  {project.results.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">✔</span> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={project.code}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
