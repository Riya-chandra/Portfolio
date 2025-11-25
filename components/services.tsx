"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

const services = [
	{
		icon: <Code2 className="w-8 h-8 text-blue-400" />,
		title: "Full-Stack Development",
		description:
			"Experienced in React.js, Node.js, Express.js, and MongoDB. Building scalable web applications with modern technologies.",
	},
	{
		icon: <Smartphone className="w-8 h-8 text-purple-400" />,
		title: "Frontend Engineering",
		description:
			"Creating seamless user experiences with React.js. Specialized in responsive design and intuitive UI/UX.",
	},
	{
		icon: <Rocket className="w-8 h-8 text-indigo-400" />,
		title: "Backend Development",
		description:
			"Building robust APIs and server-side solutions. Expert in Node.js, Express, and database management.",
	},
	{
		icon: <Palette className="w-8 h-8 text-pink-400" />,
		title: "AI Integration",
		description:
			"Implementing AI-powered solutions with Gemini AI. Building intelligent chatbots and automation tools.",
	},
];

export function Services() {
	return (
		<section
			id="services"
			className="py-14 relative mb-12"
		>
			<div className="container mx-auto px-6">
				<div className="mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						What I Do
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: "100px" }}
						viewport={{ once: true }}
						className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<GlassCard className="h-full flex flex-col justify-between group hover:scale-105 transition-transform duration-300">
								<div>
									<div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
										{service.icon}
									</div>
									<h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
									<p className="text-white/60 leading-relaxed">
										{service.description}
									</p>
								</div>
								<div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
									Learn more{" "}
									<div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
								</div>
							</GlassCard>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

