"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, ExternalLink } from "lucide-react";

export function ContactForm() {
  const contactMethods = [
    {
      title: "Email Me",
      description: "Send me an email directly",
      icon: Mail,
      href: "mailto:jeeththenthar@gmail.com?subject=Hello from Portfolio&body=Hi Jeethu, I'd like to connect with you about...",
      color: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jeethula/",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or just have a chat about technology and innovation. Let's connect!
          </p>
        </motion.div>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : '_self'}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group block"
          >
            <div className="relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-6 h-6 ${method.textColor}`} />
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {method.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </div>
              
              {/* External link indicator */}
              {method.href.startsWith('http') && (
                <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
              
              {/* Hover effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none"
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Quick Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center pt-6 border-t border-border/50"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Prefer a quick message? Click the email button above to open your default email client.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jeeththenthar@gmail.com?subject=Hello from Portfolio&body=Hi Jeethu, I'd like to connect with you about..."
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/jeethula/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}