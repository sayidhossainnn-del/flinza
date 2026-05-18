"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "UGC Production", href: "#features" },
    { name: "Ad Creative Strategy", href: "#features" },
    { name: "Creative Testing", href: "#features" },
    { name: "Performance Reporting", href: "#features" },
  ],
  Results: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Client Results", href: "#studio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Free Audit", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Flinza Works</span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                DTC creative agency built for brands tired of wasting ad spend on creatives that don&apos;t perform.
              </p>
              <p className="text-sm text-muted-foreground font-mono mb-4">hello@flinzaworks.com</p>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Flinza Works. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Taking on new clients
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
