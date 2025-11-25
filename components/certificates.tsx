"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
	{
		title: "Meta Backend Developer Professional Certificate",
		issuer: "Coursera & Meta",
		date: "June 2025",
		link: "https://coursera.org/share/e902ea9fd45cb2efc1de18334ebe34ee",
		image: "/p10.jpg",
	},
	{
		title: "Learning Git and GitHub",
		issuer: "LinkedIn",
		date: "June 2024",
		link: "https://www.linkedin.com/learning/certificates/aeda61d6ba2071c04f874c0a147144737430680596afac2363bf34ae69cabc4f",
		image: "/p5.jpg",
	},
	{
		title: "Career Essentials in Software Development",
		issuer: "Microsoft & LinkedIn",
		date: "May 2024",
		link: "https://www.linkedin.com/learning/certificates/44fabd3b2484caec9dec7473c9c0fa2bc19b847c0791345d1db1ca8f26bf3076",
		image: "/p6.jpg",
	},
	{
		title: "JavaScript Algorithms and Data Structures",
		issuer: "freeCodeCamp",
		date: "May 2024",
		link: "https://www.freecodecamp.org/certification/Nikhil_Soni/javascript-algorithms-and-data-structures",
		image: "/p7.png",
	},
	{
		title: "Node.js Essential Training",
		issuer: "LinkedIn",
		date: "May 2024",
		link: "https://www.linkedin.com/learning/certificates/a9573d2894abd382da006d80f5cd04407e1b1891893f884172ce21daad12074b",
		image: "/p8.jpg",
	},
	{
		title: "6-Week C++ Course Online",
		issuer: "GeeksforGeeks",
		date: "January 2025",
		link: "https://www.geeksforgeeks.org/certificate/bc58c7bf649ae1973cba2e7a2170ac44",
		image: "/p9.jpg",
	},
];

export function Certificates() {
	return (
		<section
			id="certificates"
			className="py-32 relative overflow-hidden"
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex items-center gap-3 mb-6"
					>
						<Award className="w-8 h-8 text-blue-400" />
						<h2 className="text-4xl md:text-6xl font-bold">
							Certifications & Achievements
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: "100px" }}
						viewport={{ once: true }}
						className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{certifications.map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<GlassCard className="h-full flex flex-col group hover:scale-105 transition-transform duration-300">
								<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
									<Image
										src={cert.image}
										alt={cert.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-semibold mb-2 line-clamp-2">
										{cert.title}
									</h3>
									<p className="text-white/60 text-sm mb-1">{cert.issuer}</p>
									<p className="text-white/40 text-xs mb-4">{cert.date}</p>
								</div>
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
								>
									View Certificate <ExternalLink className="w-4 h-4" />
								</a>
							</GlassCard>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<a
						href="https://www.linkedin.com/in/nikhilsoni973"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
					>
						View All on LinkedIn
					</a>
				</motion.div>
			</div>
		</section>
	);
}
