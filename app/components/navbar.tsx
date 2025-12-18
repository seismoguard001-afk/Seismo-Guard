"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "Features", href: "#features" },
	{ name: "Specs", href: "#specs" },
	{ name: "Community", href: "#community" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "glass-card border-b border-primary/10 py-4"
					: "py-6 bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-6 flex items-center justify-between">
				{/* Logo */}
				<motion.a
					href="#home"
					className="flex items-center gap-3 group"
					whileHover={{ scale: 1.02 }}
				>
					<div className="relative w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary/60 transition-colors duration-300">
						<span className="font-display font-bold text-primary text-lg">
							S
						</span>
						<div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
					<span className="font-display font-bold text-xl tracking-wider text-foreground">
						SEISMOGUARD
					</span>
				</motion.a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navItems.map((item, index) => (
						<motion.a
							key={item.name}
							href={item.href}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 + 0.3 }}
							className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
						>
							{item.name}
							<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
						</motion.a>
					))}
				</div>

				{/* CTA Button */}
				<motion.a
					href="#community"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_hsl(35_100%_50%/0.4)] transition-all duration-300"
				>
					Get Protected
				</motion.a>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<AnimatePresence mode="wait">
						{isMobileMenuOpen ? (
							<motion.div
								key="close"
								initial={{ rotate: -90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: 90, opacity: 0 }}
							>
								<X size={24} />
							</motion.div>
						) : (
							<motion.div
								key="menu"
								initial={{ rotate: 90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: -90, opacity: 0 }}
							>
								<Menu size={24} />
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden glass-card border-t border-primary/10 overflow-hidden"
					>
						<div className="container mx-auto px-6 py-6 flex flex-col gap-4">
							{navItems.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
								>
									{item.name}
								</motion.a>
							))}
							<motion.a
								href="#community"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
								onClick={() => setIsMobileMenuOpen(false)}
								className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium text-center"
							>
								Get Protected
							</motion.a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
