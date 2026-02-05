"use client";
import { motion } from "framer-motion";
import {
	Mail,
	MapPin,
	Phone,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

const socialLinks = [
	{
		icon: Instagram,
		href: "https://www.instagram.com/seismo_guard?igsh=MTVnZ3NrODdrMTc4OA==",
		label: "Instagram",
	},
];

const quickLinks = [
	{ name: "Home", href: "#home" },
	{ name: "Features", href: "#features" },
	{ name: "Specifications", href: "#specs" },
	{ name: "Community", href: "#community" },
];

export default function Footer() {
	return (
		<footer className="relative pt-20 pb-8 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-linear-to-t from-secondary/50 to-transparent" />
			<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
								<span className="font-display font-bold text-primary text-lg">
									S
								</span>
							</div>
							<span className="font-display font-bold text-xl tracking-wider text-foreground">
								SEISMOGUARD
							</span>
						</div>
						<p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
							Early earthquake detection system designed for homes, schools, and
							workplaces. Providing affordable, connected, and responsive safety
							solutions.
						</p>
						<div className="flex items-center gap-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									whileHover={{ scale: 1.1, y: -2 }}
									className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
									aria-label={social.label}
								>
									<social.icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-display font-semibold text-foreground mb-6">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-colors duration-300"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-display font-semibold text-foreground mb-6">
							Contact Us
						</h4>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span className="text-muted-foreground text-sm">
									Lahore, Pakistan
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-primary shrink-0" />
								<a
									href="mailto:hello@seismoguard.pk"
									className="text-muted-foreground text-sm hover:text-primary transition-colors"
								>
									hello@seismoguard.pk
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-primary shrink-0" />
								<a
									href="tel:+923001001801"
									className="text-muted-foreground text-sm hover:text-primary transition-colors"
								>
									+92 300 1001801
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-primary/10">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-sm text-muted-foreground text-center md:text-left">
							© {new Date().getFullYear()} SeismoGuard. All rights reserved.
							Made with <span className="text-primary">♥</span> in Pakistan.
						</p>
						<div className="flex items-center gap-6 text-sm text-muted-foreground">
							<a href="#" className="hover:text-primary transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-primary transition-colors">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
