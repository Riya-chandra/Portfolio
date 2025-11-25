"use client";

import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [responseMessage, setResponseMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setResponseMessage("");

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus("success");
				setResponseMessage(data.message);
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
				setResponseMessage(data.message || "Failed to send email");
			}
		} catch (error) {
			setStatus("error");
			setResponseMessage("An error occurred. Please try again.");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="max-w-md mx-auto p-6">
			<h2 className="text-2xl font-bold mb-6">Contact Me</h2>
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium mb-2"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Your name"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium mb-2"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="your.email@example.com"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium mb-2"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={5}
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Your message..."
					/>
				</div>

				<button
					type="submit"
					disabled={status === "loading"}
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
				>
					{status === "loading" ? "Sending..." : "Send Message"}
				</button>

				{status === "success" && (
					<div className="p-4 bg-green-100 text-green-700 rounded-lg">
						{responseMessage}
					</div>
				)}

				{status === "error" && (
					<div className="p-4 bg-red-100 text-red-700 rounded-lg">{responseMessage}</div>
				)}
			</form>
		</div>
	);
}
