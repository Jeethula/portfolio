"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface ResourceCardProps {
  resource: {
    name: string;
    short_description: string;
    link: string;
    additional?: boolean;
  };
}

function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace("www.", "");
  } catch {
    // Handle mailto links
    if (url.startsWith("mailto:")) {
      return url.replace("mailto:", "").split("@")[1] || "email";
    }
    return url;
  }
}

function getFaviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const domain = getDomain(resource.link);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
              {!imageError ? (
                <img
                  src={getFaviconUrl(domain)}
                  alt={resource.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-lg font-bold text-primary">
                  {resource.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <CardTitle className="text-lg leading-tight">{resource.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm leading-relaxed">
            {resource.short_description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="w-full group"
            asChild
          >
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Visit
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

