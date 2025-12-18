"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
	Activity,
	Bell,
	Wifi,
	Database,
	Volume2,
	Lightbulb,
	Cloud,
	Smartphone,
} from "lucide-react";

const features = [
	{
		icon: Activity,
		title: "Seismic Detection",
		description:
			"Advanced ADXL335 accelerometer detects unusual seismic motion and vibrations with high precision.",
		gradient: "from-orange-500/20 to-amber-500/10",
	},
	{
		icon: Bell,
		title: "Instant Local Alarm",
		description:
			"Immediate buzzer and LED activation upon detecting seismic activity for quick response.",
		gradient: "from-red-500/20 to-orange-500/10",
	},
	{
		icon: Wifi,
		title: "Wireless Remote Buzzer",
		description:
			"High-volume external buzzer unit for distant alerts across multiple zones and floors.",
		gradient: "from-amber-500/20 to-yellow-500/10",
	},
	{
		icon: Database,
		title: "Event Logging",
		description:
			"Automatic logging of time, intensity, and duration for every seismic event detected.",
		gradient: "from-green-500/20 to-emerald-500/10",
	},
	{
		icon: Volume2,
		title: "Multi-Zone Alerts",
		description:
			"Scalable alarm system supporting multiple zones for homes, schools, and workplaces.",
		gradient: "from-blue-500/20 to-cyan-500/10",
	},
	{
		icon: Lightbulb,
		title: "Visual Indicators",
		description:
			"Bright LED indicators provide instant visual feedback during seismic events.",
		gradient: "from-purple-500/20 to-violet-500/10",
	},
	{
		icon: Cloud,
		title: "API Integration",
		description:
			"Optional connection to external earthquake-warning APIs for enhanced reliability.",
		gradient: "from-teal-500/20 to-cyan-500/10",
	},
	{
		icon: Smartphone,
		title: "Smart Notifications",
		description:
			"Future-ready for mobile app integration with push notifications and remote monitoring.",
		gradient: "from-indigo-500/20 to-blue-500/10",
	},
];

export default function Features() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="features" className="relative py-32 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 grid-bg opacity-50" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-primary/3 blur-[150px]" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<motion.span
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.2 }}
						className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
					>
						Intelligent Features
					</motion.span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						<span className="text-foreground">Advanced</span>{" "}
						<span className="text-gradient">Protection</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						SeismoGuard combines cutting-edge seismic sensing technology with
						reliable multi-zone alert systems for complete safety coverage.
					</p>
				</motion.div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="relative h-full p-6 rounded-2xl glass-card neon-border hover-glow transition-all duration-500 overflow-hidden">
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
								/>

								{/* Content */}
								<div className="relative z-10">
									{/* Icon */}
									<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
										<feature.icon className="w-6 h-6 text-primary" />
									</div>

									{/* Title */}
									<h3 className="font-display text-lg font-semibold text-foreground mb-3">
										{feature.title}
									</h3>

									{/* Description */}
									<p className="text-sm text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</div>

								{/* Hover Line */}
								<div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
