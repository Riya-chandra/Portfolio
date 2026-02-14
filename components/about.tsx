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
		{ label: "Problems Solved", value: "500+", platforms: "LeetCode, GFG, Codechef" },
		{ label: "Open Source", value: "10+", platforms: "GitHub Repositories" },
		{ label: "CGPA", value: "8.0", platforms: "CSE, ABES Institute of technology" },
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
				// "MCP Servers",
				// "Azure OpenAI",
			],
		},
		{
			icon: <Cloud className="w-6 h-6" />,
			title: "Cloud & DevOps",
			skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux"],
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
									<strong className="text-white">Riya Chandra (riyachandra)</strong>,
									a driven Computer Science and Engineering student at ABES Institute of Technology, Ghaziabad, Uttar Pradesh with a passion for building
									innovative full-stack and AI-powered solutions. Originally from
									Patna, Bihar, India.
								</p>
								<p>
									My journey started with competitive programming, solving{" "}
									<strong className="text-white">
										500+ algorithmic challenges
									</strong>{" "}
									across LeetCode, GeeksforGeeks, and Codechef. This foundation
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
									(riyachandra) range from intelligent chatbots to enterprise-grade
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
				{/* Current Focus */}
<motion.div
	initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true }}
	className="mt-20"
>
	<GlassCard className="relative p-8 overflow-hidden" hoverEffect={false}>
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
			I’m currently building automation systems, real-time collaboration tools,
			and multi-agent AI architectures inspired directly by my hands-on
			experience across backend engineering, real-time systems, and AI-driven workflows.
		</p>

		{/* Multi-Agent AI Work */}
		<div className="mb-10">
			<div className="flex items-center gap-3 mb-6">
				<Brain className="w-6 h-6 text-purple-400" />
				<h4 className="text-xl font-semibold text-purple-400">
					Multi-Agent Automation (From Resume)
				</h4>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				{/* WhatsApp Personal Assistant */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<Bot className="w-5 h-5 text-blue-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								WhatsApp Personal Assistant
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								AI-powered assistant using FastAPI, LangChain multi-agent
								architecture & Twilio schedules events, manages Gmail, and
								performs real-time research directly through chat.
							</p>
						</div>
					</div>
				</div>

				{/* Async Tool Calling */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<Package className="w-5 h-5 text-green-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Async Tool-Calling Pipeline
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Engineered Groq/OpenAI-powered async tool calling +
								conversational memory using SQLite for production-grade agent
								automation with seamless Gmail + Google Calendar integration.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Real-Time Collaboration & Platforms */}
		<div className="mb-10">
			<div className="flex items-center gap-3 mb-6">
				<Rocket className="w-6 h-6 text-blue-400" />
				<h4 className="text-xl font-semibold text-blue-400">
					Real-Time Systems & Collaboration (From Resume)
				</h4>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				{/* Coding Collab Platform */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<BarChart3 className="w-5 h-5 text-orange-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Coding Collab Platform
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Built real-time coding rooms with compiler, video/audio calls,
								chat, whiteboard & solo-study modes. Added CRUD APIs for secure
								user/session management.
							</p>
						</div>
					</div>
				</div>

				{/* Chat App */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<MessageSquare className="w-5 h-5 text-pink-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">Real-Time Chat App</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Created a low-latency chat system using Socket.IO & WebSockets —
								fast message delivery, rooms, and real-time interactions.
							</p>
						</div>
					</div>
				</div>

				{/* Notes + DSA + Learning */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<FileText className="w-5 h-5 text-indigo-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Notes, DSA Quizzes & Student Feeds
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Designed a productivity suite — notes system, daily DSA quizzes,
								and community feeds to boost learning consistency.
							</p>
						</div>
					</div>
				</div>

				{/* Event Handling System */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<FolderSync className="w-5 h-5 text-cyan-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Event Handling System
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Built full CRUD event management with advanced search,
								filtering, categorization — improving discoverability by 25%.
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>

		{/* Backend Engineering */}
		<div className="mb-10">
			<div className="flex items-center gap-3 mb-6">
				<Shield className="w-6 h-6 text-emerald-400" />
				<h4 className="text-xl font-semibold text-emerald-400">
					Backend Engineering & Platform Work (From Resume)
				</h4>
			</div>

			<div className="grid md:grid-cols-2 gap-4">

				{/* Resume Builder + ATS */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<FileText className="w-5 h-5 text-teal-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Resume Builder + ATS Analyzer
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Developed resume generator with ATS scoring — increased job
								application success rate by 30% during DEHIX internship.
							</p>
						</div>
					</div>
				</div>

				{/* Verification System */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<Fingerprint className="w-5 h-5 text-violet-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								User Verification System
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Implemented backend verification mechanisms reducing fraudulent
								registrations by 35%.
							</p>
						</div>
					</div>
				</div>

				{/* Prompt Flow Engineering */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<Zap className="w-5 h-5 text-yellow-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Prompt Flow & Automation Logic
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Designed & optimized prompt-handling and automation logic using
								OpenAI + LangChain for smooth platform operations.
							</p>
						</div>
					</div>
				</div>

				{/* Platform Process Engineering */}
				<div className="p-5 rounded-lg bg-white/5 border border-white/10 md:hover:bg-white/10 transition-transform">
					<div className="flex items-start gap-3 mb-3">
						<Package className="w-5 h-5 text-orange-400 mt-1" />
						<div>
							<h5 className="font-semibold text-white mb-2">
								Platform Process Re-Engineering
							</h5>
							<p className="text-sm text-white/70 leading-relaxed">
								Restructured platform processes using Node.js + Firebase to
								streamline service workflows and communication.
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>

	</GlassCard>
</motion.div>
{" "}
				{/* Hidden SEO Content for Search Engines */}
				<div
					className="sr-only"
					aria-hidden="true"
				>
					Riya Chandra - Software Developer, Full-Stack Engineer, AI Engineer from ABESIT
					Institute of Technology, Ghaziabad, Uttar Pradesh, India. GitHub username riyachandra. Expert in
					React.js, Next.js, Node.js, Express.js, Python, TypeScript, JavaScript, MongoDB,
					PostgreSQL, MySQL. AI/ML specialist in LangChain, LangGraph, RAG Systems, AI
					Agents, MCP Servers, Azure OpenAI, Google Gemini. Cloud computing AWS, Azure,
					Docker Kubernetes Linux. 500+ problems solved on LeetCode
					GeeksforGeeks HackerRank. CGPA 8.0 Computer Science Engineering. From Patna
					Bihar. 
					Email riyachandra9119@gmail.com,
					riyachandra9119@gmail.com. Portfolio projects: CME Symbol Finder
					AI, Customer Support Chatbot, AI Video Summarizer, Wikipedia Summary Generator.
					Open source contributor YoCodex platform developer.
				</div>
			</div>
		</section>
	);
}
