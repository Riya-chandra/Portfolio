import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Riya Chandra | Software Developer | ABESIT Ghaziabad | riyachandra",
	description:
		"Riya Chandra - Full-Stack Developer and AI Engineer from ABESIT Ghaziabad. Expert in React.js, Node.js, Next.js, Python, AI Agents, LangChain, and cloud technologies. 500+ problems solved on LeetCode, GeeksforGeeks. GitHub: riyachandra. Building scalable web applications and AI-powered solutions.",
	keywords: [
		"Riya Chandra",
		"riyachandra",
		"Riya Chandra ABESIT",
		"Riya Chandra Developer",
		"Riya Chandra Software Engineer",
		"ABES INSTITUTE OF TECHNOLOGY CSE",
		"Full-Stack Developer ",
		"React Developer India",
		"Node.js Developer",
		"AI Engineer",
		"LangChain Developer",
		"Next.js Developer",
		"Python Developer",
		"GitHub riyachandra",
		"LeetCode programmer",
		"GeeksforGeeks coder",
		"Azure Developer",
		"AWS Developer",
		"AI Agents",
		"RAG Systems",
		"LangGraph",
		"Patna Bihar Developer",
	],
	authors: [{ name: "Riya Chandra" }],
	creator: "Riya Chandra",
	publisher: "Riya Chandra",
	openGraph: {
		title: "Riya Chandra | Full-Stack Developer & AI Engineer | ABESIT",
		description:
			"Riya Chandra (riyachandra) - Software Developer from ABESIT specializing in React.js, Node.js, AI/ML, and cloud technologies. 500+ coding problems solved. Building innovative web applications.",
		url: "https://riyachandra.tech/",
		siteName: "Riya Chandra Portfolio",
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Riya Chandra | Software Developer | ABESIT",
		description:
			"Full-Stack Developer & AI Engineer from ABESIT. React, Node.js, Python, AI Agents. GitHub: riyachandra",
		creator: "@Riyachandra",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<head>
				<link
					rel="icon"
					href="/favicon.svg"
					type="image/svg+xml"
				/>
				<link
					rel="manifest"
					href="/manifest.json"
				/>
				<link
					rel="canonical"
					href="https://riyachandra.tech/"
				/>
				<meta
					name="author"
					content="Riya Chandra"
				/>
				<meta
					name="geo.region"
					content="IN-BR"
				/>
				<meta
					name="geo.placename"
					content="Patna, Bihar, India"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Riya Chandra",
							alternateName: "riyachandra",
							url: "https://riyachandra.tech/",
							jobTitle: "Software Developer",
							worksFor: {
								"@type": "EducationalOrganization",
								name: "ABES INSTITUTE OF TECHNOLOGY",
								address: "Ghaziabad, Uttar Pradesh, India",
							},
							address: {
								"@type": "PostalAddress",
								addressLocality: "Patna",
								addressRegion: "Bihar",
								addressCountry: "India",
							},
							email: "riyachandra9119@gmail.com",
							telephone: "+919263226570",
							sameAs: [
								"https://github.com/Riya-chandra",
								"https://www.linkedin.com/in/riya-chandra-856657248/",
								"https://leetcode.com/u/riyachandra/",
								"https://www.geeksforgeeks.org/profile/riyachanav1d",
							],
							knowsAbout: [
								"React.js",
								"Node.js",
								"Next.js",
								"Python",
								"Artificial Intelligence",
								"LangChain",
								"Full-Stack Development",
								"Cloud Computing",
								"AI Agents",
							],
						}),
					}}
				/>
			</head>
			<body
				className={cn(
					"min-h-screen bg-black font-sans antialiased selection:bg-white/20",
					inter.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}

