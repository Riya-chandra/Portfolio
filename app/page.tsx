"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

// Lazy load heavy components below the fold
const About = dynamic(() => import("@/components/about").then((mod) => ({ default: mod.About })), {
	ssr: false,
	loading: () => <div className="min-h-screen" />,
});

const Services = dynamic(
	() => import("@/components/services").then((mod) => ({ default: mod.Services })),
	{
		ssr: false,
		loading: () => <div className="min-h-[600px]" />,
	}
);

const Skills = dynamic(
	() => import("@/components/skills").then((mod) => ({ default: mod.Skills })),
	{
		ssr: false,
		loading: () => <div className="min-h-[600px]" />,
	}
);

const Work = dynamic(() => import("@/components/work").then((mod) => ({ default: mod.Work })), {
	ssr: false,
	loading: () => <div className="min-h-screen" />,
});

const Certificates = dynamic(
	() => import("@/components/certificates").then((mod) => ({ default: mod.Certificates })),
	{
		ssr: false,
		loading: () => <div className="min-h-[600px]" />,
	}
);

const ProjectCTA = dynamic(
	() => import("@/components/project-cta").then((mod) => ({ default: mod.ProjectCTA })),
	{
		ssr: false,
		loading: () => <div className="min-h-[400px]" />,
	}
);

export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Skills />
			<Work />
			<Certificates />

			{/* Call to Action Section */}
			<ProjectCTA id="contact" />

			<Footer />
		</main>
	);
}

