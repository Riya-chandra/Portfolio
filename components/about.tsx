"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import {
	Code,
	Database,
	Cloud,
	Brain,
	Users,
	Zap,
	Rocket,
	FileText,
	Bot,
	Video,
	DollarSign,
	Shield,
	Fingerprint,
	BarChart3,
	FolderSync,
	MessageSquare,
	Package,
} from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

export function About() {
	const stats = [
		{ label: "Problems Solved", value: "720+", platforms: "LeetCode, GFG, HackerRank" },
		{ label: "Open Source", value: "80+", platforms: "GitHub Repositories" },
		{ label: "CGPA", value: "8.61", platforms: "CSE, KIIT University" },
	];

	const expertise = [
		{
			icon: <Code className="w-6 h-6" />,
			title: "Full-Stack Development",
			skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
		},
		{
			icon: <Brain className="w-6 h-6" />,
			title: "AI & Machine Learning",
			skills: [
				"LangChain",
				"LangGraph",
				"RAG Systems",
				"AI Agents",
				"MCP Servers",
				"Azure OpenAI",
			],
		},
		{
			icon: <Cloud className="w-6 h-6" />,
			title: "Cloud & DevOps",
			skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Linux"],
		},
		{
			icon: <Database className="w-6 h-6" />,
			title: "Data Structures & Algorithms",
			skills: ["DSA", "OOP", "DBMS", "OS", "System Design"],
		},
	];

	return (
		<section
			id="about"
			className="py-32 relative overflow-hidden"
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						About Me
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: "100px" }}
						viewport={{ once: true }}
						className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
					/>
				</div>
				{/* Story Section */}
				<div className="grid md:grid-cols-2 gap-12 mb-20">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<GlassCard className="relative h-full p-8 overflow-hidden">
							<h3 className="text-2xl font-bold mb-6 text-blue-400">The Journey</h3>
							<div className="space-y-4 text-white/70 leading-relaxed">
								<p>
									I'm{" "}
									<strong className="text-white">Nikhil Soni (nikhilij)</strong>,
									a driven Computer Science and Engineering student at KIIT
									University Bhubaneswar, Odisha with a passion for building
									innovative full-stack and AI-powered solutions. Originally from
									Patna, Bihar, India.
								</p>
								<p>
									My journey started with competitive programming, solving{" "}
									<strong className="text-white">
										720+ algorithmic challenges
									</strong>{" "}
									across LeetCode, GeeksforGeeks, and HackerRank. This foundation
									shaped my problem-solving mindset and fueled my transition into
									full-stack development and AI engineering.
								</p>
								<p>
									Today, as a Full-Stack Developer and AI Engineer, I specialize
									in crafting{" "}
									<strong className="text-white">
										production-ready web applications
									</strong>{" "}
									using React.js, Next.js, TypeScript, Node.js, Express.js,
									Python, MongoDB, and PostgreSQL, while actively exploring
									cutting-edge AI technologies like LangChain, LangGraph, RAG
									systems, Azure OpenAI, and AI Agents. My projects on GitHub
									(nikhilij) range from intelligent chatbots to enterprise-grade
									REST APIs, deployed on AWS, Azure, and Google Cloud Platform.
								</p>
							</div>
							<BorderBeam
								duration={8}
								size={400}
								colorFrom="#3b82f6"
								colorTo="#06b6d4"
							/>
							<BorderBeam
								duration={8}
								delay={4}
								size={400}
								borderWidth={2}
								colorFrom="#8b5cf6"
								colorTo="#3b82f6"
							/>
						</GlassCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<GlassCard className="relative h-full p-8 overflow-hidden">
							<h3 className="text-2xl font-bold mb-6 text-purple-400">
								What Drives Me
							</h3>
							<div className="space-y-4 text-white/70 leading-relaxed">
								<p>
									I believe that{" "}
									<strong className="text-white">
										"Big tech is a system of thousands of small,
										well-coordinated moving parts"
									</strong>{" "}
									— and every developer starts as one of those parts. My goal is
									to master each component while understanding the bigger picture.
								</p>
								<p>
									I'm fascinated by{" "}
									<strong className="text-white">
										AI agents and autonomous systems
									</strong>{" "}
									— building intelligent tools that can think, learn, and adapt.
									Whether it's creating RAG-powered search engines or multi-agent
									workflows, I thrive on pushing the boundaries of what's
									possible.
								</p>
								<p>
									Beyond code, I'm committed to{" "}
									<strong className="text-white">
										open-source contributions
									</strong>{" "}
									and building community platforms like <em>YoCodex</em> to help
									developers share knowledge and collaborate effectively.
								</p>
							</div>
							<BorderBeam
								duration={8}
								size={400}
								colorFrom="#a855f7"
								colorTo="#ec4899"
							/>
							<BorderBeam
								duration={8}
								delay={4}
								size={400}
								borderWidth={2}
								colorFrom="#ec4899"
								colorTo="#f59e0b"
							/>
						</GlassCard>
					</motion.div>
				</div>
				{/* Stats Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<GlassCard className="text-center p-8">
								<div className="text-5xl font-bold text-gradient mb-2">
									{stat.value}
								</div>
								<div className="text-xl font-semibold mb-2">{stat.label}</div>
								<div className="text-sm text-white/50">{stat.platforms}</div>
							</GlassCard>
						</motion.div>
					))}
				</div>
				{/* Expertise Section */}
				<div>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl font-bold mb-12 text-center"
					>
						Technical Expertise
					</motion.h3>
					{/* 4-column responsive grid with taller, portrait-style cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{expertise.map((area, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex"
							>
								{/* ElectricBorder for large screens (lg+) */}
								<ElectricBorder
									color="#7df9ff"
									speed={1}
									chaos={0.5}
									thickness={2}
									style={{ borderRadius: 16 }}
									className="hidden lg:flex flex-1 w-40 h-70 p-5 flex-col"
								>
									<div className="flex items-center gap-3 mb-8">
										<div className="p-3 rounded-lg bg-white/5 text-blue-400">
											{area.icon}
										</div>
										<h4 className="text-lg font-semibold leading-tight">
											{area.title}
										</h4>
									</div>
									<div className="flex flex-wrap gap-2 mt-auto">
										{area.skills.map((skill, idx) => (
											<span
												key={idx}
												className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-white/80"
											>
												{skill}
											</span>
										))}
									</div>
								</ElectricBorder>

								{/* GlassCard fallback for small/medium screens */}
								<GlassCard className="lg:hidden p-6 h-full min-h-[260px] flex flex-col flex-1">
									<div className="flex items-center gap-3 mb-8">
										<div className="p-3 rounded-lg bg-white/5 text-blue-400">
											{area.icon}
										</div>
										<h4 className="text-lg font-semibold leading-tight">
											{area.title}
										</h4>
									</div>
									<div className="flex flex-wrap gap-2 mt-auto">
										{area.skills.map((skill, idx) => (
											<span
												key={idx}
												className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-white/80"
											>
												{skill}
											</span>
										))}
									</div>
								</GlassCard>
							</motion.div>
						))}
					</div>
				</div>
				{/* Current Focus */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-20"
				>
					<GlassCard
						className="relative p-8 overflow-hidden"
						hoverEffect={false}
					>
						<ShineBorder
							shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
							duration={14}
							borderWidth={1}
							className="hidden md:block"
						/>
						<div className="flex items-center justify-center gap-3 mb-6">
							<Zap className="w-10 h-10 text-yellow-400" />
							<h3 className="text-3xl font-bold">Currently Building</h3>
						</div>
						<p className="text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 text-center">
							I'm currently building a collection of AI-driven, developer-centric, and
							scalable engineering systems that reflect the way modern tech ecosystems
							actually work. My focus is on blending{" "}
							<strong className="text-white">agentic AI</strong>,{" "}
							<strong className="text-white">backend automation</strong>, and{" "}
							<strong className="text-white">cloud-native architecture</strong> into
							real products that solve real problems.
						</p>

						{/* Agentic AI Systems Section */}
						<div className="mb-10">
							<div className="flex items-center gap-3 mb-6">
								<Brain className="w-6 h-6 text-purple-400" />
								<h4 className="text-xl font-semibold text-purple-400">
									Agentic AI Systems & Automation
								</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								{/* AI AnswerBot 2.0 */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<Bot className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												AI AnswerBot 2.0
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Fully modular, containerized AI system powered by
												Docker, Kubernetes, and LangGraph. Routes tasks,
												reasons through workflows, and delegates
												responsibilities across microservices.
											</p>
										</div>
									</div>
								</div>

								{/* Intelligent File Organizer */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<FolderSync className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												Intelligent File Organizer
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Self-driven AI agent that watches your system,
												understands file patterns, and organizes everything
												autonomously — a glimpse into automated
												productivity.
											</p>
										</div>
									</div>
								</div>

								{/* Social Media AI Strategist */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<MessageSquare className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												Social-Media AI Strategist
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Multiple agents act like a content team — editor,
												strategist, and platform creators for LinkedIn,
												Twitter, Instagram. They collaborate to refine and
												ship content.
											</p>
										</div>
									</div>
								</div>

								{/* Team Inventory AI */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<Package className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												Team Inventory AI
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Multi-agent system for retail workflows where
												autonomous agents represent stores, warehouses,
												suppliers, and customers — optimizing stock levels
												collaboratively.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* AI Engineering & Applied ML Section */}
						<div className="mb-10">
							<div className="flex items-center gap-3 mb-6">
								<Rocket className="w-6 h-6 text-blue-400" />
								<h4 className="text-xl font-semibold text-blue-400">
									AI Engineering & Applied ML
								</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								{/* Rocket Telemetry AI */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<BarChart3 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												AI Telemetry Analyst
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Backend service for telemetry ingestion, anomaly
												detection, and natural language Q&A. FastAPI +
												PostgreSQL + LangGraph — an intelligent telemetry
												monitoring system for rocket assets using AI-powered
												anomaly detection and natural language querying.
											</p>
										</div>
									</div>
								</div>

								{/* AI Video Summarizer */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<Video className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												AI Video Summarizer
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Using Gemini 2.0 Flash, reduces long videos into
												crisp summaries. Fast, reliable, and context-aware —
												perfect for students, developers, and researchers.
											</p>
										</div>
									</div>
								</div>

								{/* CME Symbol Finder */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<DollarSign className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												CME Symbol Finder
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Natural-language-powered search engine for traders
												using Next.js, Pinecone, Azure/OpenAI. Helps
												discover futures and options instruments instantly
												with full metadata.
											</p>
										</div>
									</div>
								</div>

								{/* Intelligent PDF Parser */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<FileText className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												Intelligent PDF Parser
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Uses OCR, LangChain, segmentation logic, and PyPDF
												to extract structured content from large PDFs —
												including tables, scanned data, and mixed formats.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Decentralized Data Section */}
						<div>
							<div className="flex items-center gap-3 mb-6">
								<Shield className="w-6 h-6 text-emerald-400" />
								<h4 className="text-xl font-semibold text-emerald-400">
									Decentralized Data Ownership & Blockchain
								</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								{/* DataVault */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<Shield className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												DataVault
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Long-term vision: consent-driven data ownership
												system using smart contracts + AI governance
												policies. Users control their data, decide access,
												and revoke permissions anytime.
											</p>
										</div>
									</div>
								</div>

								{/* Decentralized Identity Research */}
								<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform md:hover:scale-[1.02] will-change-transform">
									<div className="flex items-start gap-3 mb-3">
										<Fingerprint className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
										<div>
											<h5 className="font-semibold text-white mb-2">
												Decentralized Identity Research
											</h5>
											<p className="text-sm text-white/70 leading-relaxed">
												Exploring how NFTs and verifiable proofs can serve
												as digital identity certificates for residence
												verification, credentials, and document
												authenticity.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</GlassCard>
				</motion.div>{" "}
				{/* Hidden SEO Content for Search Engines */}
				<div
					className="sr-only"
					aria-hidden="true"
				>
					Nikhil Soni - Software Developer, Full-Stack Engineer, AI Engineer from KIIT
					University Bhubaneswar Odisha India. GitHub username nikhilij. Expert in
					React.js, Next.js, Node.js, Express.js, Python, TypeScript, JavaScript, MongoDB,
					PostgreSQL, MySQL. AI/ML specialist in LangChain, LangGraph, RAG Systems, AI
					Agents, MCP Servers, Azure OpenAI, Google Gemini. Cloud computing AWS, Azure,
					GCP. DevOps Docker Kubernetes Linux. 720+ problems solved on LeetCode
					GeeksforGeeks HackerRank. CGPA 8.61 Computer Science Engineering. From Patna
					Bihar. Meta Backend Developer Certificate, freeCodeCamp JavaScript Certificate,
					LinkedIn Learning certificates. Email nikhilprince973@gmail.com,
					nikhiljsx@gmail.com. Phone +91-9263226570. Portfolio projects: CME Symbol Finder
					AI, Customer Support Chatbot, AI Video Summarizer, Wikipedia Summary Generator.
					Open source contributor YoCodex platform developer.
				</div>
			</div>
		</section>
	);
}
