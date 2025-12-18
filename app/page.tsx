import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Specs from "@/app/components/specs";
import JoinCommunity from "@/app/components/community";
import Footer from "@/app/components/footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background noise-bg">
			<Navbar />
			<main>
				<Hero />
				<Features />
				<Specs />
				<JoinCommunity />
			</main>
			<Footer />
		</div>
	);
}
