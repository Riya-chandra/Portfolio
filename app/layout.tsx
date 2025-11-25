import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Nikhil Soni | Software Developer | KIIT University | nikhilij",
	description:
		"Nikhil Soni - Full-Stack Developer and AI Engineer from KIIT University Bhubaneswar. Expert in React.js, Node.js, Next.js, Python, AI Agents, LangChain, and cloud technologies. 720+ problems solved on LeetCode, GeeksforGeeks. GitHub: nikhilij. Building scalable web applications and AI-powered solutions.",
	keywords: [
		"Nikhil Soni",
		"nikhilij",
		"Nikhil Soni KIIT",
		"Nikhil Soni Developer",
		"Nikhil Soni Software Engineer",
		"KIIT University CSE",
		"Full-Stack Developer Bhubaneswar",
		"React Developer India",
		"Node.js Developer",
		"AI Engineer",
		"LangChain Developer",
		"Next.js Developer",
		"Python Developer",
		"GitHub nikhilij",
		"LeetCode programmer",
		"GeeksforGeeks coder",
		"Azure Developer",
		"AWS Developer",
		"AI Agents",
		"RAG Systems",
		"LangGraph",
		"Patna Bihar Developer",
	],
	authors: [{ name: "Nikhil Soni" }],
	creator: "Nikhil Soni",
	publisher: "Nikhil Soni",
	openGraph: {
		title: "Nikhil Soni | Full-Stack Developer & AI Engineer | KIIT University",
		description:
			"Nikhil Soni (nikhilij) - Software Developer from KIIT University specializing in React.js, Node.js, AI/ML, and cloud technologies. 720+ coding problems solved. Building innovative web applications.",
		url: "https://green-bay-02a2a5c1e.4.azurestaticapps.net/",
		siteName: "Nikhil Soni Portfolio",
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Nikhil Soni | Software Developer | KIIT",
		description:
			"Full-Stack Developer & AI Engineer from KIIT University. React, Node.js, Python, AI Agents. GitHub: nikhilij",
		creator: "@NikhilSoni18992",
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
					href="https://green-bay-02a2a5c1e.4.azurestaticapps.net/"
				/>
				<meta
					name="author"
					content="Nikhil Soni"
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
							name: "Nikhil Soni",
							alternateName: "nikhilij",
							url: "https://green-bay-02a2a5c1e.4.azurestaticapps.net/",
							jobTitle: "Software Developer",
							worksFor: {
								"@type": "EducationalOrganization",
								name: "KIIT University",
								address: "Bhubaneswar, Odisha, India",
							},
							address: {
								"@type": "PostalAddress",
								addressLocality: "Patna",
								addressRegion: "Bihar",
								addressCountry: "India",
							},
							email: "nikhilprince973@gmail.com",
							telephone: "+919263226570",
							sameAs: [
								"https://github.com/nikhilij",
								"https://linkedin.com/in/nikhilsoni973",
								"https://leetcode.com/u/nikhil12soni/",
								"https://www.geeksforgeeks.org/user/nikhilprsd53/",
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

