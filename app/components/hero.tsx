"use client";
import { motion } from "framer-motion";
import { ChevronDown, Activity, Wifi, Bell } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg"
		>
			{/* Background Gradient Orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 -left-1/4 w-150 h-150 rounded-full bg-primary/5 blur-[120px]" />
				<div className="absolute bottom-1/4 -right-1/4 w-125 h-125 rounded-full bg-accent/5 blur-[100px]" />
			</div>

			{/* Seismic Wave Animation */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div
					className="seismic-wave w-50 h-50"
					style={{ animationDelay: "0s" }}
				/>
				<div
					className="seismic-wave w-50 h-50"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="seismic-wave w-50 h-50"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			{/* Scan Line Effect */}
			<div className="scan-line" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-center lg:text-left"
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
							</span>
							Early Earthquake Warning System
						</motion.div>

						{/* Headline */}
						<h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
							<span className="text-foreground">Detect.</span>{" "}
							<span className="text-gradient">Alert.</span>
							<br />
							<span className="text-gradient">Protect.</span>
						</h1>

						{/* Subheadline */}
						<p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
							Advanced seismic detection with real-time alerts and multi-zone
							alarm systems. Be prepared before the ground shakes.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
							<motion.a
								href="#community"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg animate-glow-pulse hover:shadow-[0_0_40px_hsl(35_100%_50%/0.5)] transition-all duration-300"
							>
								Pre-Order Now
							</motion.a>
							<motion.a
								href="#features"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-primary/30 text-foreground font-semibold text-lg hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
							>
								Learn More
							</motion.a>
						</div>

						{/* Quick Stats */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="flex flex-wrap items-center gap-8 mt-12 justify-center lg:justify-start"
						>
							{[
								{ icon: Activity, label: "Seismic Detection" },
								{ icon: Bell, label: "Instant Alerts" },
								{ icon: Wifi, label: "Wireless Range" },
							].map((stat) => (
								<div
									key={stat.label}
									className="flex items-center gap-2 text-muted-foreground"
								>
									<stat.icon className="w-5 h-5 text-primary" />
									<span className="text-sm font-medium">{stat.label}</span>
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* Hero Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.4 }}
						className="relative flex items-center justify-center"
					>
						{/* Glow Effect Behind Image */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-[80%] h-[80%] rounded-full bg-primary/10 blur-[60px] animate-pulse" />
						</div>

						{/* Device Image */}
						<motion.div
							animate={{ y: [0, -15, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
							className="relative z-10"
						>
							<img
								src="/assets/cruvia-helmet.png"
								alt="SeismoGuard earthquake detection device with glowing amber indicators"
								className="w-full max-w-125 lg:max-w-150 drop-shadow-[0_0_80px_hsl(35_100%_50%/0.3)]"
							/>
						</motion.div>

						{/* Floating Tech Labels */}
						{[
							{ label: "ESP32-S3 Core", x: "10%", y: "20%", delay: 1 },
							{ label: "ADXL335 Sensor", x: "80%", y: "30%", delay: 1.2 },
							{ label: "Wireless Alert", x: "15%", y: "70%", delay: 1.4 },
						].map((item) => (
							<motion.div
								key={item.label}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: item.delay }}
								style={{ left: item.x, top: item.y }}
								className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-primary/20 text-xs font-medium text-primary"
							>
								<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
								{item.label}
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.a
					href="#features"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
				>
					<span className="text-xs font-medium tracking-wider uppercase">
						Scroll
					</span>
					<ChevronDown className="w-5 h-5" />
				</motion.a>
			</motion.div>
		</section>
	);
}
