"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
	{ label: "Microcontroller", value: "ESP32-S3 x2" },
	{ label: "Seismic Sensor", value: "ADXL335 (3-Axis)" },
	{ label: "Local Buzzer", value: "Integrated" },
	{ label: "Remote Buzzer", value: "Wireless High-Volume" },
	{ label: "Battery", value: "2000-3000mAh Li-ion" },
	{ label: "Charging", value: "TP4056 Module" },
	{ label: "Power Supply", value: "HLK PM01/PM12" },
	{ label: "Visual Alert", value: "LED Indicators" },
];

const architecture = [
	{
		title: "Hardware Layer",
		items: [
			"ESP32 Controller",
			"ADXL335 Sensor",
			"LED Indicators",
			"Buzzer System",
		],
	},
	{
		title: "Alert System",
		items: ["Local Alarm", "Wireless Remote Buzzer", "Multi-Zone Support"],
	},
	{
		title: "Data Layer",
		items: [
			"Event Logging",
			"Time & Intensity",
			"API Integration",
			"Cloud Backend",
		],
	},
];

export default function Specs() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="specs" className="relative py-32 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
						Technical Specifications
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						<span className="text-foreground">Inside</span>{" "}
						<span className="text-gradient">SeismoGuard</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Built with premium components for maximum reliability and
						sensitivity.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Tech Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative rounded-3xl overflow-hidden neon-border">
							<img
								src="/assets/cruvia-helmet.png"
								alt="SeismoGuard internal technology and circuit board"
								className="w-full aspect-square object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
						</div>

						{/* Floating Stats */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.6 }}
							className="absolute -bottom-8 -right-8 glass-card neon-border rounded-2xl p-6"
						>
							<div className="text-4xl font-display font-bold text-primary mb-1">
								3-Axis
							</div>
							<div className="text-sm text-muted-foreground">Detection</div>
						</motion.div>
					</motion.div>

					{/* Specs Grid */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="grid grid-cols-2 gap-4 mb-12">
							{specs.map((spec, index) => (
								<motion.div
									key={spec.label}
									initial={{ opacity: 0, y: 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.5 + index * 0.05 }}
									className="p-4 rounded-xl glass-card border border-primary/10 hover:border-primary/30 transition-colors duration-300"
								>
									<div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										{spec.label}
									</div>
									<div className="font-semibold text-foreground">
										{spec.value}
									</div>
								</motion.div>
							))}
						</div>

						{/* Architecture */}
						<div className="space-y-6">
							<h3 className="font-display text-2xl font-bold text-foreground">
								System Architecture
							</h3>
							<div className="space-y-4">
								{architecture.map((layer, index) => (
									<motion.div
										key={layer.title}
										initial={{ opacity: 0, x: 20 }}
										animate={isInView ? { opacity: 1, x: 0 } : {}}
										transition={{ delay: 0.8 + index * 0.1 }}
										className="p-4 rounded-xl glass-card neon-border"
									>
										<div className="flex items-center gap-3 mb-3">
											<div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
											<span className="font-medium text-foreground">
												{layer.title}
											</span>
										</div>
										<div className="flex flex-wrap gap-2">
											{layer.items.map((item) => (
												<span
													key={item}
													className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
												>
													{item}
												</span>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
