"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin, Mail, Send, PhoneCall, Check } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { useState } from "react";

/*
  Reference screenshots:
  /mnt/data/f86554b2-e04f-4f42-a171-31f061a192a0.png
  /mnt/data/3838be8a-77f4-4f4e-b4cf-ba648bf9fc94.png
  (you can open these locally to compare)
*/

export function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSuccess(false);
		setSending(true);

		try {
			const res = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const payload = await res.json();

			if (!res.ok) {
				setError(payload?.error || "Failed to send message");
				setSending(false);
				return;
			}

			// success
			setSuccess(true);
			setSending(false);
			// clear the form
			setFormData({ name: "", email: "", message: "" });

			// Keep the success style for a while, then reset
			setTimeout(() => setSuccess(false), 3500);
		} catch (err: any) {
			setError(err?.message || "Server error");
			setSending(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<footer className="relative pt-32 pb-12 overflow-visible">
			{" "}
			{/* overflow-visible so overlay can extend */}
			<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			<div className="container mx-auto px-6 relative z-10">
				{/* Grid: 4 logical columns on lg */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
					{/* Column 1: Brand + short bio */}
					<div className="relative">
						<Link
							href="/"
							className="text-2xl font-bold tracking-tighter mb-6 block"
						>
							NIKHIL<span className="text-blue-400">.</span>
						</Link>
						<p className="text-white/50 leading-relaxed">
							Passionate Software Engineer building scalable web applications with
							React, Node.js, and modern technologies.
						</p>
					</div>

					{/* Column 2: Sitemap */}
					<div>
						<h4 className="font-semibold mb-6">Sitemap</h4>
						<ul className="space-y-4 text-white/60">
							<li>
								<Link
									href="#work"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="text-blue-400 group-hover:translate-x-1 transition-transform">
										→
									</span>
									Work
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="text-blue-400 group-hover:translate-x-1 transition-transform">
										→
									</span>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="text-blue-400 group-hover:translate-x-1 transition-transform">
										→
									</span>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="text-blue-400 group-hover:translate-x-1 transition-transform">
										→
									</span>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Socials */}
					<div>
						<h4 className="font-semibold mb-6">Socials</h4>
						<ul className="space-y-4 text-white/60">
							<li>
								<Link
									href="https://github.com/nikhilij"
									target="_blank"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<Github className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
									GitHub
								</Link>
							</li>
							<li>
								<Link
									href="https://linkedin.com/in/nikhilsoni973"
									target="_blank"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
									LinkedIn
								</Link>
							</li>
							<li>
								<Link
									href="mailto:nikhilprince973@gmail.com"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
									Email
								</Link>
							</li>
							<li>
								<Link
									href="tel:+919263226570"
									className="hover:text-white transition-colors flex items-center gap-2 group"
								>
									<PhoneCall className="text-blue-400 w-4 h-4 group-hover:scale-110 transition-transform" />
									Phone
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact card */}
					<div>
						<h4 className="font-semibold mb-6">Let's Chat</h4>
						<div className="relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm p-8">
							<ShineBorder
								shineColor={["#3b82f6", "#8b5cf6", "#ec4899"]}
								duration={12}
								borderWidth={1}
							/>
							<form
								onSubmit={handleSubmit}
								className="space-y-5"
							>
								<div>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Your Name"
										required
										className={`w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
										disabled={sending}
									/>
								</div>
								<div>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Your Email"
										required
										className={`w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
										disabled={sending}
									/>
								</div>
								<div>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										placeholder="Your Message"
										required
										rows={4}
										className={`w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
										disabled={sending}
									/>
								</div>
								<div>
									<button
										type="submit"
										disabled={sending || success}
										className={
											success
												? "w-full px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 cursor-default"
												: sending
													? "w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 opacity-90 cursor-wait"
													: "w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 group"
										}
									>
										{sending ? (
											<>
												<span>Engaging & Connecting...</span>
												<Send className="w-4 h-4 animate-pulse" />
											</>
										) : success ? (
											<>
												<span>Message Sent Successfully!</span>
												<Check className="w-4 h-4" />
											</>
										) : (
											<>
												<span>Send Message</span>
												<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
											</>
										)}
									</button>

									{error ? (
										<p className="mt-2 text-sm text-red-400">{error}</p>
									) : null}
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* ===========================
            ABSOLUTE OVERLAY: Quote
            This overlay sits on top of the grid area (left 3 columns)
            - hidden on small screens
            - positioned so it looks 'in-row' (not below)
            - pointer-events-none so it doesn't block the contact card
           =========================== */}
				<div
					aria-hidden="true"
								className="hidden lg:flex pointer-events-none absolute left-[6%] right-[40%] bottom-[155px] justify-center pl-6 z-10"
				>
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative w-full max-w-4xl text-center py-4"
					>
						{/* paragraph wrapper - quotes anchored to this wrapper */}
						<div className="relative inline-block px-4">
							<div className="absolute -left-4 -top-2 text-4xl md:text-5xl text-blue-500/20 font-serif select-none leading-none">
								"
							</div>

							<p className="text-2xl md:text-3xl text-white/70 font-light leading-tight italic whitespace-nowrap overflow-visible">
								Building the future, one line of code at a time
							</p>

							<div className="absolute -right-4 -top-2 text-4xl md:text-5xl text-purple-500/20 font-serif select-none leading-none">
								"
							</div>
						</div>

						<motion.div
							animate={{ scale: [1, 1.05, 1] }}
							transition={{ duration: 3, repeat: Infinity }}
							className="mt-6 h-1 w-64 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full pointer-events-none"
						/>
					</motion.div>
				</div>

				{/* Footer bottom row */}
				<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
					<p>&copy; 2025 Nikhil Soni. All rights reserved.</p>
					<div className="flex items-center gap-6 mt-4 md:mt-0">
						<Link
							href="#"
							className="hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="hover:text-white transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

