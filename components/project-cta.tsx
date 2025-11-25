"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { cn } from "@/lib/utils";

interface ProjectCTAProps {
	id?: string;
	className?: string;
}

export function ProjectCTA({ id, className }: ProjectCTAProps) {
	return (
		<section
			id={id}
			className={cn("relative", className)}
		>
			<BackgroundPaths
				className="h-[32rem]"
				svgOptions={{ duration: 8 }}
			>
				<div className="container mx-auto px-6">
					<div className="text-center space-y-8">
						{/* Main Heading */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="space-y-4"
						>
							<h2 className="text-5xl md:text-6xl font-bold text-white">
								Got a Project?
							</h2>
							<h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
								Let's Work Together!
							</h3>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="space-y-6"
						>
							<p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
								Reach out at{" "}
								<a
									href="mailto:nikhilprince973@gmail.com"
									className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
								>
									nikhilprince973@gmail.com
								</a>{" "}
								or call{" "}
								<a
									href="tel:+919263226570"
									className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
								>
									+91 9263226570
								</a>
								.
							</p>

							<div className="flex items-center justify-center gap-2 text-white/80">
								<MapPin className="w-4 h-4" />
								<span>Based in Bhubaneswar, India</span>
							</div>
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
						>
							{/* Primary CTA Button */}
							<motion.a
								href="mailto:nikhilprince973@gmail.com?subject=Project%20Inquiry&body=Hi%20Nikhil,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
								className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Start a Project
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.a>

							{/* Secondary Actions */}
							<div className="flex gap-3">
								<motion.a
									href="mailto:nikhilprince973@gmail.com"
									className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									title="Send Email"
								>
									<Mail className="w-5 h-5" />
								</motion.a>
								<motion.a
									href="tel:+919263226570"
									className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									title="Call Now"
								>
									<Phone className="w-5 h-5" />
								</motion.a>
							</div>
						</motion.div>
					</div>
				</div>
			</BackgroundPaths>
		</section>
	);
}
