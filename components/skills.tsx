"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiLinux,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPostman,
  SiGithub,
  SiSocketdotio,
  SiSupabase,
  SiVercel,
  SiNginx,
  SiOpenai,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiFirebase,
  SiTwilio,
  SiArduino,
  SiNgrok,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Database, Terminal, Code2 } from "lucide-react";

const skillsData = [
  // Frontend
  { name: "React.js", icon: <SiReact className="w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-8 h-8" /> },
  { name: "CSS3", icon: <SiCss3 className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8" /> },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8" /> },
  { name: "Python", icon: <SiPython className="w-8 h-8" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-8 h-8" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="w-8 h-8" /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "SQL", icon: <Database className="w-8 h-8" /> },
  // { name: "Redis", icon: <SiRedis className="w-8 h-8" /> },
  // { name: "Prisma", icon: <SiPrisma className="w-8 h-8" /> },
  { name: "Supabase", icon: <SiSupabase className="w-8 h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },

  // AI & ML
  { name: "OpenAI", icon: <SiOpenai className="w-8 h-8" /> },
  { name: "LangChain", icon: <SiLangchain className="w-8 h-8" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8" /> },
  { name: "PyTorch", icon: <SiPytorch className="w-8 h-8" /> },
  { name: "Jupyter", icon: <SiJupyter className="w-8 h-8" /> },
  { name: "NumPy", icon: <SiNumpy className="w-8 h-8" /> },
  { name: "Pandas", icon: <SiPandas className="w-8 h-8" /> },

  // Cloud & DevOps
  { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
  { name: "Azure", icon: <VscAzure className="w-8 h-8" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="w-8 h-8" /> },
  { name: "Docker", icon: <SiDocker className="w-8 h-8" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8" /> },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8" /> },
  { name: "Nginx", icon: <SiNginx className="w-8 h-8" /> },

  // Tools & Others
  { name: "Git", icon: <SiGit className="w-8 h-8" /> },
  { name: "GitHub", icon: <SiGithub className="w-8 h-8" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="w-8 h-8" /> },
  { name: "Linux", icon: <SiLinux className="w-8 h-8" /> },
  { name: "PowerShell", icon: <Terminal className="w-8 h-8" /> },

  // Languages
  { name: "C/C++", icon: <SiCplusplus className="w-8 h-8" /> },
  { name: "Java", icon: <FaJava className="w-8 h-8" /> },

 {name:"nrrok",icon:<SiNgrok  className="w-10 h-10"/>},
 {name:"Twilio",icon:<SiTwilio className="w-8 h-8"/>}
];

const stats = [
  {
    icon: <Code2 className="w-8 h-8" />,
    count: "20+",
    label: "JavaScript & Node.js Projects",
  },
  {
    icon: <SiReact className="w-8 h-8" />,
    count: "6+",
    label: "React.js Applications",
  },
  {
    icon: <Database className="w-8 h-8" />,
    count: "15+",
    label: "Backend APIs & Databases",
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    count: "5+",
    label: "Automations & CLI Tools",
  },
];

export function Skills() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <Particles
        color="#3b82f6"
        particleCount={15000}
        particleSize={25}
        animate={true}
        className="z-0"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-green-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Description and Stats */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Building Scalable & High-Performance Web Applications
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 md:mb-8">
                Experienced in{" "}
                <strong className="text-white">full-stack development</strong>,
                specializing in{" "}
                <strong className="text-white">
                  React.js, Node.js, Express.js, and MongoDB
                </strong>
                . Passionate about solving complex problems, creating efficient
                APIs, and delivering seamless user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Work With Me
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Send an Email
                </button>
              </div>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              {stats.map((stat, index) => (
                <GlassCard
                  key={index}
                  className="p-4 md:p-6 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-blue-400 mb-2 md:mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 md:mb-2">
                    {stat.count}
                  </div>
                  <p className="text-xs md:text-sm text-white/60">
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 lg:mt-100"
        >
          <div className="mb-8 md:mb-12 lg:mb-16 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Complete Tech Stack & Tools Arsenal
            </h3>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto px-4">
              50+ technologies mastered across frontend, backend, AI/ML, cloud
              infrastructure, and more
            </p>
          </div>
          <SpotlightCard
            className="p-6 md:p-10 lg:p-12 mt-4 md:mt-6 lg:mt-8"
            spotlightColor="59, 130, 246"
          >
            {/* UPDATED GRID CLASS BELOW: grid-cols-3 for mobile, sm:grid-cols-4 for tablet portrait */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.01,
                  }}
                  className="flex flex-col items-center justify-center gap-2 md:gap-3 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-center text-white/70 group-hover:text-white transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}