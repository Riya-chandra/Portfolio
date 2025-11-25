import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { Certificates } from "@/components/certificates";
import { ProjectCTA } from "@/components/project-cta";
import { Footer } from "@/components/footer";

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

