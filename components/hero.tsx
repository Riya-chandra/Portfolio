"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			{/* Background Liquid Elements - Optimized for mobile */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[60px] md:blur-[120px] animate-blob mix-blend-screen will-change-transform" />
				<div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[60px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-screen will-change-transform" />
				<div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-600/20 rounded-full blur-[60px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-screen will-change-transform" />
			</div>

			<div className="container mx-auto px-6 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mb-8"
				>
					<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
						<Image
							src="/profile.jpg"
							alt="Riya Chandra"
							fill
							sizes="192px"
							className="object-cover"
							priority
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
						</span>
						<span className="text-xs font-medium text-white uppercase tracking-wider">
							Available for new projects
						</span>
					</div>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white drop-shadow-xl"
				>
					Riya Chandra
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
					className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed"
				>
					Software Developer | React Specialist | Backend Engineer
					<br />
					<span className="text-white/80 text-base">
					    ABESIT CSE Student | riyachandra on GitHub | Passionate about building
						scalable web applications with React.js, Node.js, Python, AI Agents,
						LangChain, and modern technologies.
					</span>
				</motion.p>

				{/* Hidden SEO Keywords */}
				<div className="sr-only">
					Riya Chandra - Full-Stack Developer from ABES Institute of Technology, Ghaziabad, Uttar Pradesh.
					Software Engineer specializing in React.js, Next.js, Node.js, Python,
					TypeScript, JavaScript, AI/ML, LangChain, LangGraph, RAG Systems, AI Agents,
					Azure OpenAI, AWS, GCP, Docker, Kubernetes. riyachandra GitHub profile. LeetCode
					programmer with 500+ problems solved. GeeksforGeeks expert. Open source
					contributor. From Patna, Bihar, India. Contact: riyachandra9119@gmail.com,
					+91-9263226570.
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.8 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-6"
				>
					<a
						href="#work"
						className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
					>
						<span className="relative z-10 flex items-center gap-2">
							View My Work{" "}
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
					</a>
					<a
						href="#contact"
						className="px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
					>
						Contact Me
					</a>
				</motion.div>

				{/* radial socials moved to footer for site-wide presence */}
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-10 right-10 hidden lg:flex lg:flex-col items-center gap-2"
			>
				<span className="text-xs text-white/70 uppercase tracking-widest">Scroll</span>
				<div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
			</motion.div>
		</section>
	);
}

