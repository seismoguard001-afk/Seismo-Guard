import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IFormData {
	from_name: string;
	from_email: string;
	subject: string;
	message: string;
}

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>();
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit = async (data: IFormData) => {
		console.log(data);
		try {
			if (formRef.current) {
				setIsSubmitted(false);
				setIsSubmitting(true);
				const response = await emailjs.sendForm(
					"service_s7s3d6o", // Your Service ID
					"template_g7c6e1b", // Your Template ID
					formRef.current,
					"XKK2OiK_EQ-aNf6sJ", // Your Public Key
				);
				console.log("EmailJS response:", response);
				if (response.status === 200) {
					toast.success(
						"Thank you for contacting us! We'll get back to you soon.",
					);
					reset(); // Clear form immediately
					setIsSubmitted(true);
					setIsSubmitting(false);
				}
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Failed to send message. Please try again.");
			setIsSubmitted(false);
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="relative py-20 px-4 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(35_100%_50%/0.1),transparent_50%)]" />

			<div className="relative max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
							Get in <span className="text-gradient">Touch</span>
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Have questions about SeismoGuard? We'd love to hear from you. Send
							us a message and we'll respond as soon as possible.
						</p>
					</motion.div>
				</div>

				{/* Form Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl" />
					<div className="relative glass-card rounded-3xl p-8 md:p-12 border border-primary/20">
						<form
							ref={formRef}
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<div className="grid md:grid-cols-2 gap-6">
								{/* Name Field */}
								<div>
									<label
										htmlFor="from_name"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Your Name <span className="text-primary">*</span>
									</label>
									<input
										{...register("from_name", {
											required: "Please enter your name",
										})}
										type="text"
										id="from_name"
										className="w-full px-6 py-4 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
										placeholder="John Doe"
									/>
									{errors.from_name && (
										<span className="text-red-500 text-sm mt-1 block">
											{errors.from_name.message}
										</span>
									)}
								</div>

								{/* Email Field */}
								<div>
									<label
										htmlFor="from_email"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Your Email <span className="text-primary">*</span>
									</label>
									<input
										{...register("from_email", {
											required: "Please enter your email",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address",
											},
										})}
										type="email"
										id="from_email"
										className="w-full px-6 py-4 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
										placeholder="john@example.com"
									/>
									{errors.from_email && (
										<span className="text-red-500 text-sm mt-1 block">
											{errors.from_email.message}
										</span>
									)}
								</div>
							</div>

							{/* Subject Field */}
							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-foreground mb-2"
								>
									Subject <span className="text-primary">*</span>
								</label>
								<input
									{...register("subject", {
										required: "Please enter a subject",
									})}
									type="text"
									id="subject"
									className="w-full px-6 py-4 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
									placeholder="How can we help you?"
								/>
								{errors.subject && (
									<span className="text-red-500 text-sm mt-1 block">
										{errors.subject.message}
									</span>
								)}
							</div>

							{/* Message Field */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-foreground mb-2"
								>
									Message{" "}
									<span className="text-muted-foreground text-xs">
										(optional)
									</span>
								</label>
								<textarea
									{...register("message")}
									id="message"
									rows={6}
									className="w-full px-6 py-4 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
									placeholder="Tell us more about your inquiry..."
								/>
							</div>

							{/* Submit Button */}
							<motion.button
								type="submit"
								disabled={isSubmitting}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(35_100%_50%/0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
										<span>Sending...</span>
									</>
								) : (
									<>
										Send Message
										<ArrowRight className="w-5 h-5" />
									</>
								)}
							</motion.button>
							{isSubmitted && (
								<div className="text-center text-sm text-emerald-500">
									Form submitted successfully.
								</div>
							)}
						</form>

						{/* Additional Info */}
						<div className="mt-8 pt-8 border-t border-primary/10">
							<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
									We respond within 24 hours
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
									Your data is secure
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactForm;
