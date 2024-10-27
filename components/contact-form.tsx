"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium text-sm">
            Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-background"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="font-medium text-sm">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="Project Inquiry"
          required
          className="bg-background"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="font-medium text-sm">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          required
          className="bg-background min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}