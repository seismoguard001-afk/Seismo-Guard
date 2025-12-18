"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Shield, Zap, Home, Building } from "lucide-react";

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
					<div className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl" />
					<div className="relative glass-card rounded-3xl p-8 md:p-12 border border-primary/20">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
									Be <span className="text-gradient">Prepared</span>
								</h3>
								<p className="text-muted-foreground mb-6">
									Join the waitlist for early access to SeismoGuard. Be among
									the first to protect your home, school, or workplace with our
									advanced seismic detection system.
								</p>
								<div className="flex items-center gap-6 text-sm text-muted-foreground">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
										Limited Units
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
										Coming 2025
									</div>
								</div>
							</div>

							<form className="space-y-4">
								<div className="relative">
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email"
										className="w-full px-6 py-4 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
										required
									/>
								</div>
								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(35_100%_50%/0.4)] transition-all duration-300 disabled:opacity-50"
								>
									{isSubmitting ? (
										<div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
									) : (
										<>
											Join Waitlist
											<ArrowRight className="w-5 h-5" />
										</>
									)}
								</motion.button>
							</form>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
