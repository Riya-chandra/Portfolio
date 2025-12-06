"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
	{
		title: "Meta Backend Developer Professional Certificate",
		issuer: "APNA COLLEGE",
		date: "Jan 2025",
		link: "https://drive.google.com/file/d/1xNzUlMYzODtsmfOowZrCPiAhk2-aA8xJ/view?usp=drive_link",
		image: "/p10.png",
	},
	{
		title: "Intership",
		issuer: "Dehix Pvt Ltd",
		date: "March 2025",
		link: "https://drive.google.com/file/d/1ffsv7FBJfOTOYn4CsFu3ihK97quzSNY8/view?usp=drive_link",
		image: "/p5.png",
	},
	{
		title: "Artificial Intelligence",
		issuer: "Infosys",
		date: "Oct 2025",
		link: "https://drive.google.com/file/d/17oa83hX9hMiCLdNH00odKKo58tAd4u1i/view?usp=drive_link",
		image: "/p6.png",
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
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
						href="https://www.linkedin.com/in/riya-chandra-856657248"
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
