"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
	{
		title: "AI Telemetry Analyst by Nikhil Soni",
		category: "Backend Service | Telemetry & Anomaly Detection",
		image: "/rocket.jpg",
		color: "from-sky-500/20 to-indigo-600/20",
		link: "#",
		description:
			"Backend service for telemetry ingestion, anomaly detection, and natural language Q&A. FastAPI + PostgreSQL + LangGraph. Intelligent telemetry monitoring system for rocket assets using AI-powered anomaly detection and natural language querying.",
	},
	{
		title: "CME Symbol Finder AI by Nikhil Soni",
		category: "Trading Symbol Search | AI Application",
		image: "/image.png",
		color: "from-blue-500/20 to-cyan-500/20",
		link: "https://cme-symbol-finder.vercel.app/",
		description:
			"AI-powered trading symbol search by Nikhil Soni (nikhilij). CME Group futures/options with 17+ metadata. Next.js 16, TypeScript, LangChain, Azure OpenAI, Pinecone vector database.",
	},
	{
		title: "Wikipedia AI Summarizer by Nikhil Soni",
		category: "Enterprise API Service | AI-Powered Summarization",
		image: "/wiki.jpg",
		color: "from-emerald-500/20 to-teal-600/20",
		link: "#",
		description:
			"Enterprise-grade API service generating intelligent Wikipedia summaries using GitHub AI (GPT-4o). Features batch processing, multiple summary styles, comprehensive analytics, and production-ready architecture. Perfect for researchers, content creators, and developers needing automated high-quality summaries at scale.",
	},
	{
		title: "Auriville - Global Real Estate Platform by Nikhil Soni",
		category: "🌍 Full-Stack Application | Interactive Mapping",
		image: "/aurville.png",
		color: "from-amber-500/20 to-orange-600/20",
		link: "#",
		description:
			"Map-first global real estate platform by Nikhil Soni (nikhilij) for buying, selling, and renting properties worldwide. Features interactive Leaflet maps, AI property suggestions, virtual tours, secure transactions, and comprehensive property management. Built with React, FastAPI, MongoDB, and advanced geospatial technology.",
	},
	{
		title: "UsePopcorn - Movie Tracker by Nikhil Soni",
		category: "React Application | Full-Stack Project",
		image: "/p2.png",
		color: "from-purple-500/20 to-pink-500/20",
		link: "https://usepopcorn-beryl.vercel.app/",
		description:
			"Movie rating and tracker app by Nikhil Soni (nikhilij). Built with React.js, API integration, responsive design, interactive UI.",
	},
	{
		title: "AI Customer Support Chatbot by Nikhil Soni",
		category: "AI Application | ChatBot Development",
		image: "/p3.png",
		color: "from-orange-500/20 to-red-500/20",
		link: "https://thankful-desert-070c0d21e.6.azurestaticapps.net/",
		description:
			"Intelligent customer support chatbot by Nikhil Soni (nikhilij). CopilotKit, Azure OpenAI, Next.js 16, MongoDB. Real-time ticket management and AI conversations.",
	},
];

export function Work() {
	return (
		<section
			id="work"
			className="py-32 relative overflow-hidden"
		>
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-4xl md:text-6xl font-bold mb-6"
						>
							Selected Work
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-xl text-white/60 max-w-md"
						>
							A showcase of my latest projects and applications.
						</motion.p>
					</div>
					<motion.a
						href="https://github.com/nikhilij"
						target="_blank"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
					>
						View All Projects
					</motion.a>
				</div>

				<div className="space-y-20">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
						>
							<GlassCard className="p-0 overflow-hidden group">
								<div className="grid md:grid-cols-2 gap-0">
									<div
										className={`p-12 flex flex-col justify-center relative overflow-hidden`}
									>
										<div
											className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
										/>
										<div className="relative z-10">
											<span className="text-sm font-medium text-white/50 mb-4 block uppercase tracking-wider">
												{project.category}
											</span>
											<h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
												{project.title}
											</h3>
											<p className="text-white/70 mb-8 max-w-md">
												{project.description}
											</p>
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
											>
												View Live Demo
											</a>
										</div>
									</div>
									<div className="relative h-[400px] md:h-auto overflow-hidden">
										<Image
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, 50vw"
											quality={75}
											priority={index === 0}
											placeholder="blur"
											blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iIzIwMjAyMCIvPjwvc3ZnPg=="
										/>
										<div className="absolute inset-0 bg-transparent md:bg-black/20 md:group-hover:bg-transparent transition-colors duration-500" />
									</div>
								</div>
							</GlassCard>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

