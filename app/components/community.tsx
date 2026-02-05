"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Shield, Zap, Home, Building } from "lucide-react";
import ContactForm from "./contact-form";

const values = [
	{
		icon: Shield,
		title: "Safety First",
		description: "Protecting lives with early warning is our mission",
	},
	{
		icon: Zap,
		title: "Instant Response",
		description: "Millisecond detection for maximum evacuation time",
	},
	{
		icon: Home,
		title: "Home Protection",
		description: "Affordable safety for every household",
	},
	{
		icon: Building,
		title: "Scalable Solution",
		description: "From homes to schools and workplaces",
	},
];

export default function JoinCommunity() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<section id="community" className="relative py-32 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-150 h-150 rounded-full bg-primary/5 blur-[150px]" />
				<div className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full bg-accent/5 blur-[120px]" />
			</div>
			<div className="absolute inset-0 grid-bg opacity-30" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Mission Statement */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
						Our Mission
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
						<span className="text-foreground">Early Warning for</span>{" "}
						<span className="text-gradient">Every Home</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						We believe everyone deserves access to earthquake early warning
						technology. SeismoGuard makes seismic safety affordable, connected,
						and reliable.
					</p>
				</motion.div>

				{/* Values Grid */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
				>
					{values.map((value, index) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.3 + index * 0.1 }}
							className="text-center p-6 rounded-2xl glass-card neon-border hover-glow group"
						>
							<div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
								<value.icon className="w-7 h-7 text-primary" />
							</div>
							<h3 className="font-display text-lg font-semibold text-foreground mb-2">
								{value.title}
							</h3>
							<p className="text-sm text-muted-foreground">
								{value.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* CTA Card */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="relative max-w-4xl mx-auto"
				>
					<ContactForm />
				</motion.div>
			</div>
		</section>
	);
}
