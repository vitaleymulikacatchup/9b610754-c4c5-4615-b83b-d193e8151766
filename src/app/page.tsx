"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Brain, Code, Gauge, HelpCircle, Quote, Rocket, Search, User, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Docs", id: "https://docs.relace.ai" },
            { name: "Blog", id: "https://blog.relace.ai" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" }
          ]}
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Relace"
          brandName="Relace"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Models built for coding agents"
          description="Source control with out-of-the-box codebase retrieval, fast utility SLMs, and task-specific agents you can run on any repo."
          tag="Infrastructure"
          tagIcon={Code}
          buttons={[
            { text: "Sign up for free", href: "https://app.relace.ai" },
            { text: "Book an intro call", href: "https://calendly.com/relace" }
          ]}
          imageSrc="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Developer working with AI coding agents"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Purpose-built for coding workflows. Instead of relying on general-purpose LLMs, our in-house models specialize in retrieval, merging, and code generation — making them faster, more reliable, and easier to integrate into engineering pipelines."
          buttons={[
            { text: "Learn More", href: "https://docs.relace.ai" },
            { text: "See Features", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything you need for autonomous codegen"
          description="Building blocks for reliability and scale"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Code Retrieval",
              description: "Best in class semantic search that scales to large codebases out-of-the-box with built-in two stage retrieval.",
              icon: Search,
              button: { text: "Learn More", href: "https://docs.relace.ai/retrieval" }
            },
            {
              title: "Fast Apply",
              description: "Universal code merging model that applies file edits at 10,000 tok/s to integrate AI edits with existing code.",
              icon: Zap,
              button: { text: "Try Now", href: "https://app.relace.ai" }
            },
            {
              title: "Specialized Models",
              description: "Purpose-built models for code retrieval, merging, and generation that outperform frontier LLMs on autonomous codegen subtasks.",
              icon: Brain,
              button: { text: "Explore", href: "https://docs.relace.ai/models" }
            },
            {
              title: "Low Latency",
              description: "Optimized inference stack delivers fast response times with lightweight push/pull operations and no rate limits.",
              icon: Gauge,
              button: { text: "Benchmark", href: "https://docs.relace.ai/performance" }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by the trailblazers"
          description="See what developers and founders are saying about Relace"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Teddy Ni",
              role: "Co-Founder of MagicPatterns",
              testimonial: "Relace has been a critical tool for us to create custom, design-focused AI models and allowed us to fine tune on our own data and continuously create better and better models.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: User
            },
            {
              id: "2",
              name: "Alex Chen",
              role: "Senior Software Engineer",
              testimonial: "Just wanted to say that Relace's fast rewriting capabilities have completely transformed our development workflow. The speed and accuracy are incredible.",
              imageSrc: "https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: User
            },
            {
              id: "3",
              name: "Sarah Martinez",
              role: "Tech Lead at AI Startup",
              testimonial: "Teams use Relace to cut down errors, accelerate development, and gain a real competitive edge. It's become essential to our engineering pipeline.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: User
            },
            {
              id: "4",
              name: "David Kim",
              role: "AI Researcher",
              testimonial: "The specialized models for retrieval and merging are game-changing. Much faster and more reliable than general-purpose LLMs for coding tasks.",
              imageSrc: "https://images.pexels.com/photos/8877104/pexels-photo-8877104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: User
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about Relace"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Why Relace?",
              content: "Relace is purpose-built for coding workflows. Instead of relying on general-purpose LLMs, our in-house models specialize in retrieval, merging, and code generation — making them faster, more reliable, and easier to integrate into engineering pipelines. Teams use Relace to cut down errors, accelerate development, and gain a real competitive edge."
            },
            {
              id: "2",
              title: "Is Relace SOC 2 compliant?",
              content: "Yes. Relace is built with enterprise security in mind, and our systems are SOC 2 compliant to ensure your code and data remain secure."
            },
            {
              id: "3",
              title: "How fast is the code retrieval?",
              content: "Our semantic search can search an entire codebase in less than 2 seconds with best-in-class accuracy that scales to large codebases out-of-the-box."
            },
            {
              id: "4",
              title: "What makes your models different?",
              content: "Our models are small, fast, and trained in-house to outperform frontier LLMs on utility tasks. They're specifically designed for coding agents with specialized capabilities for retrieval, merging, and generation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to supercharge your coding workflow?"
          description="Join developers and teams using Relace to build better software faster with AI-powered coding agents."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email"
          buttonText="Sign Up Free"
          termsText="By signing up you agree to our Terms of Use and Privacy Policy. Start building with Relace today."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Docs", href: "https://docs.relace.ai" },
                { label: "App", href: "https://app.relace.ai" },
                { label: "Pricing", href: "pricing" },
                { label: "Status", href: "https://status.relace.ai" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "https://blog.relace.ai" },
                { label: "Careers", href: "https://careers.relace.ai" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Use", href: "https://relace.ai/terms" },
                { label: "Privacy Policy", href: "https://relace.ai/privacy" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Relace"
        />
      </div>
    </ThemeProvider>
  );
}